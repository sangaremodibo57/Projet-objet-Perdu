import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Tab1ServiceService implements OnInit {
url = environment.URL
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
      
  }
  getAllAnnonceActive(){
    return this.http.get(this.url+"/listeannonceactive");
  }

  getAllAnnonceActiveTrouve(){
    return this.http.get(this.url+"/listeannonceactivetrouve");
  }
}
