import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegisterServiceService } from '../Service/register-service.service';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user : any;
  utillisateur = new User;
  constructor(public alertController: AlertController,private service : RegisterServiceService, private route : Router){

  }
  registreForm(userForm:any) {
    if (userForm.value['genre']!=''&& userForm.value['email']!=''&& userForm.value['password'] == userForm.value['passwordC'] && userForm.value['tel']!='') {
      this.service.verifier(userForm.value.tel,userForm.value.email).subscribe(data=>{
        if (data!=null) {
          this.alertController.create({
            cssClass:'my-custom-class',
            message: 'Votre numero ou email existe déjà',
          }).then(res => {
            
            res.present();
            setTimeout(()=>res.dismiss(),3000);
          });
          
        } else {
          this.utillisateur.email = userForm.value['email'];
          this.utillisateur.etat = 'active';
          this.utillisateur.genre = userForm.value['genre'];
          this.utillisateur.nom_complet = userForm.value['nom_complet'];
          this.utillisateur.password = userForm.value['password'];
          this.utillisateur.photo ='vide';
          this.utillisateur.profession = userForm.value['profession'];
          this.utillisateur.tel = userForm.value['tel'];
          console.log(this.utillisateur);
          this.service.ajoutUser(this.utillisateur).subscribe(data=>{
            this.route.navigateByUrl('/login');
            this.alertController.create({
              cssClass:'my-custom-class',
              message: 'Inscription avec Succès',
            }).then(res => {
              
              res.present();
              setTimeout(()=>res.dismiss(),3000);
            });
          })
        }
      })
    }else{
      this.alertController.create({
        cssClass:'my-custom-class',
        message: 'Veillez Remplire les Champs "*" obligatoire svp',
      }).then(res => {
  
        res.present();
  
      });
    }
    
  }
  ngOnInit() {
  
  }




}
