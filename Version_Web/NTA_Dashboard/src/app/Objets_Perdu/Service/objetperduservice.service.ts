import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjetperduserviceService {
  url = environment.URL;
  constructor(private http: HttpClient) { }

  deleteAnnonce(id: any){
    return this.http.delete(this.url+`/deleteannonce/${id}`);
  }

 //liste des objet Perdu par etat active
 getAllAnnoncePerdu(){
  return this.http.get(this.url+"/listeannonceactive");
}

afficherUserById(id : any){
  return this.http.get(this.url+`/userByid/${id}`)
}

 //desactiver l annonce
 desactiveAnnonce(id:any , data: any){
  return this.http.put(this.url+`/changeannoncedesactive/${id}`, data)

}

afficheByIdAnnonce(id:any){
  return this.http.get(this.url+'/oneannonce/'+id);
}
 
}