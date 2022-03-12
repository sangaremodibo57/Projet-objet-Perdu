import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { DetailServiceService } from '../Service/detail-service.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.page.html',
  styleUrls: ['./modifier-profil.page.scss'],
})
export class ModifierProfilPage implements OnInit {
  id: any;
  user: any;
  userF= new User();
  userConnecte: any;

  constructor(private service : DetailServiceService,private router :ActivatedRoute, private route : Router) { }

  ngOnInit() {
    this.userConnecte = JSON.parse(localStorage.getItem('userData'))
    console.log(this.userConnecte);
    this.id =this.userConnecte.id;
    console.log(this.userConnecte.id);
    this.service.detailUser(this.id).subscribe(data=>{
      this.user=data;
      console.log(this.user);
      console.log(this.user.email);
      
      
    })
}

  updateUtilisateur(userForm:any){
    console.log(userForm.value);
    
    this.service.updateUser(this.id, userForm.value).subscribe((data: any)=>{
      localStorage.setItem('userData', JSON.stringify(data));
      this.route.navigate(['/tabs/tabs/tab1']);
     
      
     })
  }
}
