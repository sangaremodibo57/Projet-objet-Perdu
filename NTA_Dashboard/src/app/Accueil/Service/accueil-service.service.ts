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
  

  addNotification(data:any){
    return this.http.post(this.url+'/addnotification', data)
  }

  desactiveReclamation(id:any , data: any){
    return this.http.put(this.url+`/changereclamationdesactive/${id}`, data)

  }

  desactiveAnnonce(id:any , data: any){
    return this.http.put(this.url+`/changeannoncedesactive/${id}`, data)

  }


  getAllAnnonceTrouve(){
    return this.http.get(this.url+"/listeannonceactivetrouve");
  }
  getAllAnnoncePerdu(){
    return this.http.get(this.url+"/listeannonceactive");
  }
 
  
  getAllReclameActive(){
    return this.http.get(this.url+"/listereclamationactivenovalide");
  }

  // categorie 
  updateEtatDesactive(id:any , data:any){
    return this.http.put(this.url+'/changeobjetdesactive/'+id, data);
  }


  afficheByIdAnnonce(id:any){
    return this.http.get(this.url+'/oneannonce/'+id);
  }
}
