import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Service/Login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any;
  password:any;
  private user:any;

  constructor( private route: Router,private service:LoginServiceService ) { }

  ngOnInit() {
  }
  onLogin(loginForm:any) {
    
    
    this.service.verifier(loginForm.email, loginForm.password)
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            localStorage.setItem('userData', JSON.stringify(data))
           this.route.navigateByUrl('tabs/tabs/tab1');
          }
        }
      )
  }
}
