import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


export type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: ProfileType | undefined;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProfile(environment.apiConfig.uri);
  }

    // todo: refactor this.
  getProfile(url: string) {
    this.http.get(url)
      .subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
  }
}
