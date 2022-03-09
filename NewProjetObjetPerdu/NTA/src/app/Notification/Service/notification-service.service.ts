import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
url = environment.URL;
  constructor(private http : HttpClient) { }

  listeNoticationByUser(id : any){
    return this.http.get(this.url+`/notificationByUser/${id}`);
  }

  getNotificationById(id){
    return this.http.get(this.url+`/getnotificationByid/${id}`);
  }

  desactiveEtatById(id : any, data){
    return this.http.put(this.url+`/updateEtatByDesactive/${id}`, data);
  }
}
