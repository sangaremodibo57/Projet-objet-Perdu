import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {
  url = environment.URL;
  constructor(private http : HttpClient) { }

  getAllAnnoncePerdu(){
    return this.http.get(this.url+"/listeannonceactive");
  }
  getAllAnnonceTrouve(){
    return this.http.get(this.url+"/listeannonceactivetrouve");
  }
}
