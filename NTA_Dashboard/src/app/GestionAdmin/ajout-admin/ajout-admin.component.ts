import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrateur } from 'src/app/Models/Administrateur';
import { AdminServiceService } from '../Service/admin-service.service';

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.scss']
})
export class AjoutAdminComponent implements OnInit {
newadmin = new Administrateur();
    id:any;
    nom_complet:any;
    email:any;
    login:any;
    genre:any;
    tel:any;
    password: any;
    etat:any;

  constructor(
    private serviceAdmin:AdminServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ajoutAdmin(form:NgForm){
    console.log(form.value);
    
    this.newadmin.nom_complet=form.value['nom_complet'];
    this.newadmin.email=form.value['email'];
    this.newadmin.login=form.value['login'];
    this.newadmin.genre=form.value['genre'];
    this.newadmin.tel=form.value['tel'];
    this.newadmin.password=form.value['login']+123;
    this.newadmin.etat='active';
    
    console.log(this.newadmin);
    return this.serviceAdmin.ajoutAdmin(this.newadmin).subscribe((data:any)=>{
      console.log(data);
      this.router.navigateByUrl('listeadmin');
    })
   
  }
}
