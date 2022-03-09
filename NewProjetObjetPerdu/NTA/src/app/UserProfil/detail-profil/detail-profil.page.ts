import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailServiceService } from '../Service/detail-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.page.html',
  styleUrls: ['./detail-profil.page.scss'],
})
export class DetailProfilPage implements OnInit {
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
      this.route.navigateByUrl('/detail-profil', {skipLocationChange: true}).then(()=>
      this.route.navigate(['detail-profil']));
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
              this.route.navigateByUrl('/detail-profil', {skipLocationChange: true}).then(()=>
              this.route.navigate(['detail-profil']));
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
