import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieObjetServiceService {
url= environment.URL
  constructor(
    private http : HttpClient
  ) { }

  ajoutCategorieService(data:any){
    return this.http.post(this.url+'/addcategorie',data);
  }

  listCategorieService(){
    return this.http.get(this.url+'/allcategorie');
  }

  ajoutObjetService(data:any){
    return this.http.post(this.url+'/addobjet', data);
  }

  listObjetService(){
    return this.http.get(this.url+'/allobjetactive');
  }
  
}
