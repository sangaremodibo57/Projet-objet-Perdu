import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorbeilleAdminServiceService {
  url = environment.URL
  constructor(
    private http:HttpClient
  ) { }
  //Liste des Admininistrateurs inactive
  getalladmininactive(){
    return this.http.get(this.url+"/listeadmindesactive");
  }
  //Restaurer Admin dans Corbeille
  changeetatadminactive(id: Number){
    return this.http.delete(this.url+"/changeetatadminactive/"+id);
  }
}
