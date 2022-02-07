import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
url = environment.URL;
  constructor(private http : HttpClient) { }

  ajoutUser(data : any){
    return this.http.post(this.url+'/saveuser',data);
  }
}
