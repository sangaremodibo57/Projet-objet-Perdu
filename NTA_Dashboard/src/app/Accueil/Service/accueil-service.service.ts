import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {
url = environment.URL;
  constructor(private http : HttpClient) { }
  afficheFemmeService(){
    return this.http.get(this.url+'/userfemme');
  }
  afficheHommeService(){
    return this.http.get(this.url+'/userhomme');
  }
  getAllAnnoncePerdu(){
    return this.http.get(this.url+"/allannonce");
  }
  
  getAllReclame(){
    return this.http.get(this.url+"/allreclame");
  }

  updateEtatDesactive(id:any , data:any){
    return this.http.put(this.url+'/changeobjetdesactive/'+id, data);
  }
  afficheByIdAnnonce(id:any){
    return this.http.get(this.url+'/oneannonce/'+id);
  }
}
