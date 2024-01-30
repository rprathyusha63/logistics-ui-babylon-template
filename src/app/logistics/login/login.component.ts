import { Component, OnInit } from '@angular/core';
import { AuthTokenRequest, LoginDataService } from '../services/login/login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string= '';
  authTokenRequest: AuthTokenRequest ;
  message = 'invalid credentials'
invalidmessageFlag=false;

  constructor(private router: Router,
    private loginService: LoginDataService) { }

  ngOnInit(): void {
  }
handleLogin(){
  this.authTokenRequest= new AuthTokenRequest(this.username, this.password);
  this.loginService.getAuthToken(this.authTokenRequest).subscribe(
    response => {
      this.invalidmessageFlag = false; 
      sessionStorage.setItem('authToken',response.jwttoken)
      sessionStorage.setItem('username',response.username)
      this.router.navigate(['/']);
    },
    error => {
      this.invalidmessageFlag = true;
      console.log(error);
    });
}
isUserLoggedIn(){
  return !(null === sessionStorage.getItem('authToken'))
}
}
