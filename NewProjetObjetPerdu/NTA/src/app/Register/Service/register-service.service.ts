import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  url = environment.URL;
  constructor(private http : HttpClient) { }

  ajoutUser(data : any){
    return this.http.post(this.url+'/saveuser',data);
  }

  afficheUser(){
    return this.http.get(this.url+'/listeUserActive');
  }

  public verifier(tel: string, email: string) {
    return this.http.get(this.url+"/verifieTelOrEmail?tel="+tel+"&email="+email)
  }
}