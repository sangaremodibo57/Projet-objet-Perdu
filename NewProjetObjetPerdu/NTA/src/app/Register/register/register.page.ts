import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegisterServiceService } from '../Service/register-service.service';
import { User } from 'src/app/Model/User';
import Swal from 'sweetalert2';

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
    if (userForm.value['email']!=''&& userForm.value['password'] === userForm.value['passwordC'] , userForm.value['tel']!=''&& userForm.value['password'] === userForm.value['passwordC']) {
      this.service.verifier(userForm.value.tel,userForm.value.email).subscribe(data=>{
        if (data!=null) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            text: 'Le Tel/Email est déjà utiliser ',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: 'Erreur De Connexion '
          })
          
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
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            Toast.fire({
              icon: 'success',
              title: 'inscription a été effectué avec succès.'
            })
          })
        }
      })
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        text: 'Veillez Remplire les Champs "*" obligatoire svp',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: 'Erreur D\'Inscription '
      })
     
    }
    
  }
  ngOnInit() {
  
  }




}
