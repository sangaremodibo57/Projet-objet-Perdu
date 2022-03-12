import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url=environment.URL;
  constructor(
    private httpclient:HttpClient,
  ) { }

  listeUser(){
    return this.httpclient.get(this.url+'/listeUserActive');
  }
  addUser(data:any){
    return this.httpclient.post(this.url+'/saveuser', data);
  }
  updateUser(data:any, id:any){
    return this.httpclient.put(this.url+'/updateuser/'+{id}, data);
  }
  deleteUser(id:any){
    return this.httpclient.delete(this.url+`/modifierdesactiveUser/${id}`);
  }
  detailUser(id:any){
    return this.httpclient.get(this.url+`/userByid/${id}`)
  }
}
