import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorbeilleUserServiceService {
url = environment.URL;
  constructor(private http: HttpClient) { }
  //Liste des Utilisateurs desactive
  getallUserinactive(){
    return this.http.get(this.url+"/listeUserDesactive");
  }
  //Restaurer Utilisateurs
  ChangeetatUserinactive(id:Number){
    return this.http.delete(this.url+"/modifieUserActive/"+id);

  }
}
