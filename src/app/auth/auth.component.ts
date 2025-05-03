import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';
import { environment } from '../../environments/environment';




@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.authService.handleRedirectObservable().subscribe();
    // // Remove this line to use Angular Universal
    // this.isIframe = window !== window.parent && !window.opener; 
    
    // this.setLoginDisplay();

    // this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window
    // this.msalBroadcastService.msalSubject$
    //   .pipe(
    //     filter((msg: EventMessage) => msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
    //   )
    //   .subscribe((result: EventMessage) => {
    //     if (this.authService.instance.getAllAccounts().length === 0) {
    //       console.log("No accounts detected, logging out");
    //       window.location.pathname = "/";
    //     } else {
    //       console.log("Account data received");
    //       this.setLoginDisplay();
    //     }
    //   });
    
    // this.msalBroadcastService.inProgress$
    //   .pipe(
    //     filter((status: InteractionStatus) => status === InteractionStatus.None),
    //     takeUntil(this._destroying$)
    //   )
    //   .subscribe(() => {
    //     this.setLoginDisplay();
    //     this.checkAndSetActiveAccount();
    //   })
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
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

  // loginRedirect() {
  //   if (this.msalGuardConfig.authRequest){
  //     this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
  //   } else {
  //     this.authService.loginRedirect();
  //   }
  // }

  loginPopup() {
    if (this.msalGuardConfig.authRequest){
      this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
        .subscribe((response: AuthenticationResult) => {
          console.log("login res 1: " + response.account);
          this.authService.instance.setActiveAccount(response.account);
        });
      } else {
        this.authService.loginPopup()
          .subscribe((response: AuthenticationResult) => {
            console.log("login res 2: " + response.account);
            this.authService.instance.setActiveAccount(response.account);
      });
    }
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: "/"
      });
    } else {
      this.authService.logoutRedirect();
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

}
