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
}
