import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'gw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService:LoginService) {  }

  public login() {
    alert('hello');
    this.loginService.login();
  }

  public logout() {
    alert('hello');
    this.loginService.logout();
  }

  get username() {
    return this.loginService.getLoggedInUser();
  }
}
