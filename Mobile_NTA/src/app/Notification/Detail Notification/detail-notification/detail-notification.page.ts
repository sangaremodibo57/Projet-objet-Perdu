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

  constructor(private router : ActivatedRoute, private service : NotificationServiceService, private route : Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.service.getNotificationById(this.id).subscribe(data=>{
      this.myNotification = data['admin'].nom_complet;
      console.log('hghghghghghghg',this.myNotification);
    })
  }


  

  desactiveEtat(id){
    return this.service.desactiveEtatById(id, this.myNotification).subscribe(data=>{
      this.route.navigateByUrl('/home')
    })
  }
}
