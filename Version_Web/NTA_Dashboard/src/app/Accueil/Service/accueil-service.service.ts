import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {
url = environment.URL;
  constructor(private http : HttpClient) { }

 // categorie (Categorie)
 updateEtatDesactive(id:any , data:any){
  return this.http.put(this.url+'/changeobjetdesactive/'+id, data);
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

  //liste des objet Perdu par etat active (Perdu)
  getAllAnnoncePerdu(){
    return this.http.get(this.url+"/listeannonceactive");
  }
 
  // liste des objet Trouve par etat active (Trouve)
  getAllAnnonceTrouve(){
    return this.http.get(this.url+"/listeannonceactivetrouve");
  }
  // liste des Reclamation par etat active (Reclamation)
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

  //ajout notification
  addNotification(data:any){
    return this.http.post(this.url+'/addnotification', data)
  }

  //affiche reclamation par id
  getReclamationById(id : any){
    return this.http.get(this.url+`/reclameByid/${id}`);
  }
  // changer etat en Desactive (Reclamation)
  putReclamationEtatDesactive(id : any, data : any){
    return this.http.put(this.url+`/putReclamationEtatEnDesactive/${id}`, data);
  }


  afficheFemmeService(){
    return this.http.get(this.url+'/userfemme');
  }
  afficheHommeService(){
    return this.http.get(this.url+'/userhomme');
  }
  

  

  


}
