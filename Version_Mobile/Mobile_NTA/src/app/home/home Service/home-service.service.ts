import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
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


  //notification
  listeNoticationByUser(id : any){
    return this.http.get(this.url+`/notificationByUser/${id}`);
  }
}
