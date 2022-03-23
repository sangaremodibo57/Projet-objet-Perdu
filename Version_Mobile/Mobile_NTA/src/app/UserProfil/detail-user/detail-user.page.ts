import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DetailServiceService } from '../Service/detail-service.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  user: string;
  userConnecte: any;
  test :boolean;
  annoncebyuser: Object;
  constructor(private alertCtrl: AlertController, private route : Router, private service : DetailServiceService) { }

  ngOnInit() {
    this.userConnecte = JSON.parse(localStorage.getItem('userData'))
    console.log(this.userConnecte);
    if (this.userConnecte === null) {
    this.test=true;
     console.log(this.test);
      
    }else{
      this.test=false;
      console.log(this.test);
    }
    this.service.getAllUserbyId(this.userConnecte.id).subscribe(data=>{
      console.log('cest ok ooooooooooooooooo',data);
      this.annoncebyuser = data;
    })
    
  }
  deletAnnonce(data:any){
    this.service.supprimerAnnonce(data).subscribe(data=>{
      window.location.reload();
      this.route.navigateByUrl('/detail-user', {skipLocationChange: true}).then(()=>
      this.route.navigate(['detail-user']));
    })
  }

  presentConfirm() {
    this.alertCtrl.create({
      cssClass:'my-custom-class',
      message: 'Supprimer?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: (id) => {
            this.service.updateEtatDesactive(id, this.annoncebyuser).subscribe(data=>{
              window.location.reload();
              this.route.navigateByUrl('/detail-user', {skipLocationChange: true}).then(()=>
              this.route.navigate(['detail-user']));
            })
          }
        }
      ]
      }).then(res => {

      res.present();

      });
  }




  logout(){
    localStorage.removeItem('userData')
    localStorage.clear();
    this.route.navigateByUrl('login');
  }

 

}
