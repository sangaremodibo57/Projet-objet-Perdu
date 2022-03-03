import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {
  url = environment.URL;
  constructor(private http : HttpClient) { }

  getAllCategorie(){
    return this.http.get(this.url+"/allcategorie");
  }
  getCategorieActive(){
    return this.http.get(this.url+"/categorieactive");
  }
  getAllObjet(){
    return this.http.get(this.url+"/allobjet");
  }
  getObjetActive(){
    return this.http.get(this.url+"/allobjetactive");
  }
  getAllAnnonce(){
    return this.http.get(this.url+"/allannonce");
  }
  ajoutAnnonce(data:any){
    return this.http.post(this.url+'/saveannonce', data);
  }
  verify(nom:String, lieu:String, couleur:String){
    console.log('Verify : ', nom , lieu, couleur)
    return this.http.get(this.url+"/verifie?nom="+nom+"&lieu="+lieu+"&couleur="+couleur);
  }

  verifyReclame(nom: String, nomC:String,couleur:String){
    return this.http.get(this.url+"/verifiReclamer?nom="+nom+"&nomC="+nomC+"&couleur="+couleur);
  }
  detailAnnonce(id: any){
    return this.http.get(this.url+`/oneannonce/${id}`);
  }
  reclamer(data:any){
    return this.http.post(this.url+'/savereclame',data);
  }
}
