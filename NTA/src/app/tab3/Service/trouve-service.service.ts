import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrouveServiceService {
  url = environment.URL;
  constructor(private http: HttpClient) { }

  getAllAnnonceTrouve(){
    return this.http.get(this.url+"/allannonce");
  }
}
