import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../shared';


@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private title: string;
  private loggedIn: boolean;
  private asd: {};

  constructor (private auth: AuthService,
    private router: Router,
    private http: Http) {
    console.log(this.asd);
    this.title = this.auth.name;
    this.loggedIn = this.auth.isLoggedIn();

    this.auth.loginObservable.subscribe(() => {
      this.updateAccount();
    });
    this.auth.logoutObservable.subscribe(() => {
      this.updateAccount();
    });
  }

  private updateAccount(): void {
    this.title = this.auth.name;
    this.loggedIn = this.auth.isLoggedIn();
  }

  public logout(): void {
    this.auth.logout()
      .then(() => this.handleLogout())
      .catch(error => alert(error));
  }

  private handleLogout(): void {
    this.router.navigate(['/login']);
  }

}
