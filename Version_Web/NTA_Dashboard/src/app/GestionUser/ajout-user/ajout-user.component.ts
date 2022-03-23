import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/Users/User';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
newuser = new User();
    id:any;
    nom_complet:any;
    email:any;
    login:any;
    genre:any;
    tel:any;
    password: any;


  constructor(
    private Userservice:UserServiceService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  ajoutUser(form:NgForm){
    this.newuser.nom_complet = form.value['nom_complet'];
    this.newuser.email = form.value['email'];
    this.newuser.login = form.value['login'];
    this.newuser.genre = form.value['genre'];
    this.newuser.password = form.value['login']+123;
    this.newuser.tel = form.value['tel'];
    this.newuser.etat = 'active';
    console.log(this.newuser);
    
    return this.Userservice.addUser(this.newuser).subscribe((data)=>{
      console.log(data);
      this.route.navigateByUrl('listeuser');
      
    })
  }
}
