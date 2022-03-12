import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DetailServiceService } from '../Service/detail-service.service';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.page.html',
  styleUrls: ['./update-publication.page.scss'],
})
export class UpdatePublicationPage implements OnInit {
  id: any;
  detaiannonce: Object;
  listesObjet: any;

  constructor(private alertController : AlertController, private route : Router, private router : ActivatedRoute,private service : DetailServiceService) { }

  ngOnInit() {
    this.allObjet();
    this.id = this.router.snapshot.params['id']
    this.service.detailAnnonce(this.id).subscribe(data=>{
      this.detaiannonce =data;
      console.log(this.detaiannonce);
      
      
    })
  }

  updateMyAnnonce(userForm:any){
    console.log('-------------ok',userForm.value);
    this.service.updateAnnonce(this.id, userForm.value).subscribe(data=>{
      this.route.navigate(['/tabs/tabs/tab1']);
      this.alertController.create({
        cssClass:'my-custom-class',
        message: 'Doonnées Modifier avec Succès',
        }).then(res => {
  
        res.present();
  
        });
    })
  }

  allObjet(){
    return this.service.getAllObjet().subscribe((data:any)=>{
      this.listesObjet = data;
      console.log(this.listesObjet);
      console.log(this.listesObjet.nom);
      
      
    })
  }



}
