import { Component, OnInit } from '@angular/core';
import { CategorieObjetServiceService } from '../../Service/categorie-objet-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categories } from 'src/app/Models/Categories';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent implements OnInit {
  admin: any;
  adminConnect: any;

  categorie = new Categories();
 
  constructor(private service : CategorieObjetServiceService, private route : Router) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin);
    console.log(this.adminConnect);
    this.afficheCategorie();
    
  }

  async afficheCategorie(){
    return this.service.listCategorieService().subscribe((data:any)=>{
      console.log('cccccccccccccccccccccccccccc',data);
      
      
    })
  }

 

  ajoutCategorie(form:NgForm){ 
    this.categorie.nom = form.value['nom'];
    this.categorie.adm = this.adminConnect;
    console.log(this.categorie);
    
    this.service.ajoutCategorieService(this.categorie).subscribe((data:any)=>{
      console.log(data);
      this.route.navigateByUrl('listCategorie');
    })
   
  }

  ajoutObjet(){

  }
}
