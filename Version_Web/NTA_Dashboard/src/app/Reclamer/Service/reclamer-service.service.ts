import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamerServiceService {
url= environment.URL;
  constructor(private http : HttpClient) { }
  afficheReclame(){
    return this.http.get(this.url+'/listereclamationactivenovalide');
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

   // liste des Reclamation par etat active et statut non valide (Reclamation)
   getAllReclameActive(){
    return this.http.get(this.url+"/listereclamationactivenovalide");
  }

  // Desactive Reclamation (Reclamation)
  desactiveReclamation(id:any , data: any){
    return this.http.put(this.url+`/changereclamationdesactive/${id}`, data)

  }


   //liste des reclemation (Reclamation)
   getAllReclamation(id : any){
    return this.http.get(this.url+'/allreclame');
  }

  //affiche reclamation par id (Reclamation)
  getReclamationById(id : any){
    return this.http.get(this.url+`/reclameByid/${id}`);
  }
  // changer etat en Desactive (Reclamation)
  putReclamationEtatDesactive(id : any, data : any){
    return this.http.put(this.url+`/putReclamationEtatEnDesactive/${id}`, data);
  }

   //ajout notification
   addNotification(data:any){
    return this.http.post(this.url+'/addnotification', data)
  }
  // liste des Reclamation par etat active et statut non valide (Reclamation)
  getAllreclamationdesactivevalide(){
    return this.http.get(this.url+"/listereclamationdesactive");
  }
}
