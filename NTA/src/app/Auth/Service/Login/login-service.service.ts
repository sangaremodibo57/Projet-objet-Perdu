import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = environment.URL;
  constructor(private http: HttpClient) { }

  public verifier(email: string, password: string) {
    return this.http.get(this.url+"/auth?email="+email+"&password="+password)
  }

  public SetLogin(login: string) {
    localStorage.setItem("email", login)
  }

  public getLogin(){
    return localStorage.getItem("email")
  }

  public SetPassword(password: string) {
    localStorage.setItem("password", password)
  }

  public getPassword(){
    return localStorage.getItem("password")
  }
}
