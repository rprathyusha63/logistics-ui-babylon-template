import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class AuthTokenRequest{
  constructor( 
    public email?: String,
    public password?: String){}
}
export class AuthTokenResponse{
  constructor( 
    public jwttoken?: string,
    public username?: string){}
}

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private http:HttpClient) { }
  getAuthToken(authTokenRequest: AuthTokenRequest){
    console.log(authTokenRequest)
    return this.http.post<AuthTokenResponse>(`http://localhost:8080/auth/login`,authTokenRequest);
  }
}
