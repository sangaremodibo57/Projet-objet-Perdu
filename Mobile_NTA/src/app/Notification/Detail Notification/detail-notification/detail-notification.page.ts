import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationServiceService } from '../../Service/notification-service.service';

@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.page.html',
  styleUrls: ['./detail-notification.page.scss'],
})
export class DetailNotificationPage implements OnInit {
  id: any;
  myNotification: any;
  nomAdmin: any;
  description: any;
  photo: any;
  nomAnnonce: any;
  dateAnnonce: any;
  statut: any;

  constructor(private router : ActivatedRoute, private service : NotificationServiceService, private route : Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.service.getNotificationById(this.id).subscribe(data=>{
     
      this.myNotification = data;
      this.nomAdmin = this.myNotification['admin'].nom_complet;
      this.description = this.myNotification.description;
      this.photo = this.myNotification.reclame.annonce.photo;
      this.nomAnnonce = this.myNotification.reclame.annonce.nom;
      this.dateAnnonce = this.myNotification.reclame.annonce.date;
      this.statut = this.myNotification.reclame.annonce.statut;
      console.log('hghghghghghghg',this.myNotification);
    })
  }


  

  desactiveEtat(id){
    return this.service.desactiveEtatById(id, this.myNotification).subscribe(data=>{
      this.route.navigateByUrl('/home')
    })
  }
}
