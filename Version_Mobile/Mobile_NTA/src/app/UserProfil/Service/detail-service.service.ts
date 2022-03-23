import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {
  url= environment.URL;
  constructor( private http : HttpClient) { }

  updateUser(id: any, data: any){
    return this.http.put(this.url+`/updateuser/${id}`, data);
  }

  updateAnnonce(id: any, data: any){
    return this.http.put(this.url+`/updateannonce/${id}`, data);
  }

  detailUser(id: any){
    return this.http.get(this.url+`/userByid/${id}`);
  }

  getAllUserbyId(id:any){
    return this.http.get(this.url+`/annonceByutilisateur/${id}`);
  }
  supprimerAnnonce(id:any){
    return this.http.delete(this.url+`/deleteannonce/${id}`);
  }

  detailAnnonce(id:any){
    return this.http.get(this.url+`/oneannonce/${id}`);
  }
  getAllObjet(){
    return this.http.get(this.url+"/allobjet");
  }

   // desactiver Annonce  
   updateEtatDesactive(id:any , data:any){
    return this.http.put(this.url+'/changeannoncedesactive/'+id, data);
  }

}
