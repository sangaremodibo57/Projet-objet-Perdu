import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
url=environment.URL
  constructor(
    private http: HttpClient
    ) { }

  listeAdmin(){
    return this.http.get(this.url+'/listeadminactive');
  }
  ajoutAdmin(data:any){
    return this.http.post(this.url+'/saveadmin', data);
  }
  updateAdmin(id:any, data:any ){
    return this.http.put(this.url+`/updateadmin/${id}`, data);
  }
  deleteAdmin(id:any){
    return this.http.delete(this.url+`/changeetatadmindesactive/${id}`);
  }
  detailAdmin(id:any){
    return this.http.get(this.url+'/getadminByid/'+id);
  }
}
