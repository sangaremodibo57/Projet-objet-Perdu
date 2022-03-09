import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from '../Service/notification-service.service';
import { ActionSheetController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { ContentChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  userConnecte: any;
  myNotification: any=[];
  nombreMessage: any ;
  nombre: number;

  constructor(private route : Router, private serve : NotificationServiceService,public actionSheetController: ActionSheetController) { }
  @ViewChild (ContentChild) content : ContentChild ;

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Action',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Ouvrire',
        icon: 'mail-open-sharp',
        handler: () => {
          this.route.navigateByUrl('/detail-notification/:',this.myNotification.id)
        }
      }, {
        text: 'Supprinmer',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          
        }
      },{
        text: 'Annuler',
        icon: 'close',
        role: 'Annuler',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  ngOnInit() {
    
    this.userConnecte = JSON.parse(localStorage.getItem('userData'))
      console.log(this.userConnecte);
    this.afficheNotificationUser();  
    
    
  }

  updateetat(id){

  }
  
  afficheNotificationUser(){
    return this.serve.listeNoticationByUser(this.userConnecte.id).subscribe(data=>{
      console.log('okkkkkkkkkkkkkkkk',data);
      this.myNotification = data;
      this.nombre = this.myNotification.length;
      console.log(this.nombre);
    })
  }

}
