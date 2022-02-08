import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerduServiceService {
  url = environment.URL;
  constructor(private http: HttpClient) { }

  getAllAnnoncePerdu(){
    return this.http.get(this.url+"/allannonce");
  }
}
