import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginServiceService } from '../Service/login-service.service';
import Swal from 'sweetalert2'
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
            
            this.route.navigateByUrl('tabs/tabs/tab1');
            this.alertController.create({
            cssClass:'my-custom-class',
            message: 'BIENVENUE',
            }).then(res => {
      
            res.present();
            setTimeout(()=>res.dismiss(),1000);
            loginForm['email']['password'].reset();
            });
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
          }else {
            
            this.service.verifieTel(loginForm.email, loginForm.password).subscribe(data=>{
              if (data != null) {
                localStorage.setItem('userData', JSON.stringify(data));
                
                this.route.navigateByUrl('tabs/tabs/tab1');
                this.alertController.create({
                cssClass:'my-custom-class',
                message: 'BIENVENUE',
                }).then(res => {
          
                res.present();
                setTimeout(()=>res.dismiss(),2000);
                loginForm['email']['password'].reset();
                });
                loginForm['email']['password'].reset();
                loginForm['email']='';
              } else {
                this.alertController.create({
                  cssClass:'my-custom-class',
                  message: "Desoler nous arrivons pas a t'indentifer",
                  }).then(res => {
            
                  res.present();
                  setTimeout(()=>res.dismiss(),2000);

                  loginForm['email']['password'].reset();
                  });
              }
            })
          }
          
        }
        
      )
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

