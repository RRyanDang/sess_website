import { Component } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';
import { EventMessage, AuthenticationResult, InteractionStatus, EventType } from '@azure/msal-browser';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProfileType } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  profile: ProfileType | undefined;
  loginDisplay = false;
  isIframe = false;
  // unsubscribe event on component destroy
  private readonly _destroying$ = new Subject<void>();

  constructor(private router: Router, private http: HttpClient ,private authService: MsalService, private msalBroadcastService: MsalBroadcastService) {}
 
  // change back to ngOnInit to enable code
  ngOnINIT() {

    this.authService.handleRedirectObservable().subscribe();
    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use

    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window

    this.msalBroadcastService.msalSubject$
    .pipe(
      filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS || msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
      takeUntil(this._destroying$)
    )
    .subscribe((result: EventMessage) => {
      switch (result.eventType) {
        case EventType.LOGIN_SUCCESS:
          console.log(result);
          const payload = result.payload as AuthenticationResult;
          this.authService.instance.setActiveAccount(payload.account);
          // this.getProfile(environment.apiConfig.uri);
          break;
        default:
          if (this.authService.instance.getAllAccounts().length === 0) {
            console.log("No accounts detected, logging out");
            window.location.pathname = "/";
          } else {
            console.log("Account data received");
            this.setLoginDisplay();
          }
          break;
        
      }
      
    });
  
  this.msalBroadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
      this.checkAndSetActiveAccount();
    })

    // if (this.authService.instance.getAllAccounts().length > 0) {
    //   this.getProfile(environment.apiConfig.uri);
    // }
   
  }

  checkAndSetActiveAccount(){
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    console.log("checkAndSetActiveAccount");
    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      console.log("No active account set, but there are accounts. Setting the first account as active account");
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  getProfile(url: string) {
    this.http.get(url)
      .subscribe(profile => {
        this.profile = profile;
      });
  }
  ngOnDestroy() {
    // this.profileSub?.unsubscribe();
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  setLoginDisplay() {
    // this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    if(this.authService.instance.getAllAccounts().length > 0){
      this.http.get(environment.apiConfig.uri)
      .subscribe(profile => {
        console.log("subbbbbbb!!!")
        this.profile = profile;
        this.loginDisplay = true;
        this.router.navigate(['profile']);
      });
    }
  }
  
}
