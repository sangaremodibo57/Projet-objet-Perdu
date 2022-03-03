import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
 
    this.service.verifier(loginForm.email, loginForm.password)
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            
            localStorage.setItem('userData', JSON.stringify(data));
            
            this.route.navigateByUrl('tabs/tabs/tab1');
            this.alertController.create({
            cssClass:'my-custom-class',
            message: 'BIENVENUE',
            }).then(res => {
      
            res.present();
              
            });
            loginForm['email']['password'].reset();
          }else{
            this.service.verifieTel(loginForm.email, loginForm.password).subscribe(data=>{
              if (data != null) {
                localStorage.setItem('userData', JSON.stringify(data));
                
                this.route.navigateByUrl('tabs/tabs/tab1');
                this.alertController.create({
                cssClass:'my-custom-class',
                message: 'BIENVENUE',
                }).then(res => {
          
                res.present();
          
                });
                loginForm['email']['password'].reset();
                loginForm['email']='';
              } else {
                this.alertController.create({
                  cssClass:'my-custom-class',
                  message: "Desoler nous arrivons pas a t'indentifer",
                  }).then(res => {
            
                  res.present();
            
                  });
              }
            })
            loginForm['email']['password'].reset();
          }
          
        }
        
      )
      loginForm['email']['password'].reset();
  }

  
  
}

