import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/GestionAdmin/Service/admin-service.service';
import { LoginServiceService } from '../../Service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:any;
password:any;
  constructor(
    private Loginservice:LoginServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(form:NgForm){

    return this.Loginservice.Verifier(form.value['email'], form.value['password'])
    .subscribe
    ((data:any)=>{
      if (data!=null) {
        localStorage.setItem('userData', JSON.stringify(data))
       this.route.navigateByUrl('accueil');
      }else{
        console.log("no validate");
        
      }

    })

  }
}
