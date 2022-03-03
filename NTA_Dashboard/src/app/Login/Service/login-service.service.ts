import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
url=environment.URL;
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }
  //Methode de Vérification des données pour l'authentification
  public Verifier(email: string, password: string) {
    return this.http.get(this.url+"/authadmin?email="+email+"&password="+password)
  }
  public SetLogin(email: string) {
    localStorage.setItem("email", email)
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
