import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjettrouveserviceService {
  url = environment.URL;
  constructor(private http: HttpClient) { }

  deleteAnnonce(id: any){
    return this.http.delete(this.url+`/deleteannonce/${id}`);
  }


  //affiche User par Id (User)
  afficherUserById(id : any){
    return this.http.get(this.url+`/userByid/${id}`)
  }

  //affiche tout les annonce
  getAllAnnonce(){
    return this.http.get(this.url+'/allannonce');
  }

  //desactiver l annonce (Annonce)
  desactiveAnnonce(id:any , data: any){
    return this.http.put(this.url+`/changeannoncedesactive/${id}`, data)

  }

   //affiche Annoce par Id (Annonce)
   afficheByIdAnnonce(id:any){
    return this.http.get(this.url+'/oneannonce/'+id);
  }

  
 
  // liste des objet Trouve par etat active (Trouve)
  getAllAnnonceTrouve(){
    return this.http.get(this.url+"/listeannonceactivetrouve");
  }
  
}