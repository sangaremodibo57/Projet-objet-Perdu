import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/GestionAdmin/Service/admin-service.service';
import Swal from 'sweetalert2';
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
       const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
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
      }else{
        console.log("no validate");
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }) 
        Toast.fire({
          icon: 'error',
          title: 'Email ou mot de passe Incorrecte'
        })
        
      }

    })

  }
}
