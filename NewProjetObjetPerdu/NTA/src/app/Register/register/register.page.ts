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
      this.service.afficheUser().subscribe((data:any)=>{
        let list = data;
        for (let i = 0; i < list.length; i++) {
          if (list[i].tel == userForm.value['tel'] ) {
            this.alertController.create({
              cssClass:'my-custom-class',
              message: 'le numero '+ userForm.value['tel'] +' Existe Deja',
            }).then(res => {
        
              res.present();
        
            });
            
          } else {
            for (let i = 0; i < list.length; i++) {
              if (list[i].email == userForm.value['email']) {
                this.alertController.create({
                  cssClass:'my-custom-class',
                  message: 'le numero '+ userForm.value['email'] +' Existe Deja',
                }).then(res => {
            
                  res.present();
            
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
                })
                
              }
              
            }
            
          }
          
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
