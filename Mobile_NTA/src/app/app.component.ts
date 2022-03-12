import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userConnecte: any;
  test: boolean;
  constructor(private route : Router) {
    this.userConnecte = JSON.parse(localStorage.getItem('userData'))
      console.log(this.userConnecte);
      if (this.userConnecte === null) {
      this.test=true;
       console.log(this.test);
        
      }else{
        this.test=false;
        console.log(this.test);
      }
  }
  msgPublication(){
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
      title: 'Veuillez vous connecter pour pouvoir faire une annonce'
    })
  }

  logout(){
    localStorage.removeItem('userData')
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
}
