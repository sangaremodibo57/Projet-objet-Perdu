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

  getAllAnnoncePerdu(){
    return this.http.get(this.url+"/listeannonceactive");
  }
 
}