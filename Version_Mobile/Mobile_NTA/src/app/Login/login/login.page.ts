import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'
import { LoginServiceService } from '../Service/login-service.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    login: any;
    password:any;
    tel : any;
    private user:any;
  
    constructor(public alertController: AlertController, private route: Router,private service:LoginServiceService ) { }
  
    ngOnInit() {
      
    }
    onLogin(loginForm:any) {
      if ( loginForm.email!='' ,loginForm.password != '') {
        this.service.verifier(loginForm.email, loginForm.password).subscribe((data:any)=> {
          if (data!=null) {
            localStorage.setItem('userData', JSON.stringify(data));
            this.route.navigateByUrl('/home');
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
              title: 'Bienvenu'
            })
          }else {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              text: ' Tel/Email ou le mot de passe est incorrect ',
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
            
          }
            
          }
          
        )
        this.service.verifieTel(loginForm.email, loginForm.password).subscribe(data=>{
          if (data != null) {
            localStorage.setItem('userData', JSON.stringify(data));
            this.route.navigateByUrl('/home');
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
              title: 'Bienvenu'
            })
            loginForm['email']['password'].reset();
            loginForm['email']='';
          } else {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              text: ' Tel/Email ou le mot de passe est incorrect ',
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
          }
        })
  
        loginForm['email']['password'].reset();
      } else {
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
          icon: 'error',
          title: 'Veillez Remplire tout les champs SVP'
        })
      }
    }
  }
  
  