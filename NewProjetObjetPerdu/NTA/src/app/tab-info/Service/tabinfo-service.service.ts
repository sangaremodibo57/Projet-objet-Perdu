import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabinfoServiceService {
url = environment.URL;
  constructor(private http : HttpClient) { }
  getAllObjetPerdu(){
    return this.http.get(this.url+"/allobjetperdu");
  }
  getAllAnnonce(){
    return this.http.get(this.url+"/allannonce");
  }
  getAllAnnonceTrouve(){
    return this.http.get(this.url+"/listeannonceactivetrouve");
  }
  afficheFemmeService(){
    return this.http.get(this.url+'/userfemme');
  }
  afficheHommeService(){
    return this.http.get(this.url+'/userhomme');
  }
}
