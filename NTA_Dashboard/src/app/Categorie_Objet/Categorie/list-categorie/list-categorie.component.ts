import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieObjetServiceService } from '../../Service/categorie-objet-service.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {
  listeCategorie: any;
  listeObjet: any;
  desactiveIdCategorie: any;
  desactiveIdObjet : any;
  searchText ='';

  constructor(private service : CategorieObjetServiceService, private route : Router) { }

  ngOnInit(): void {
    this.afficheCategorie();
    this.afficheObjet();
  }
  
  async afficheCategorie(){
    return this.service.listCategorieService().subscribe((data:any)=>{
      this.listeCategorie = data;
     
      
      
    })
  }

  async afficheObjet(){
    return this.service.listObjetService().subscribe((data:any)=>{
      this.listeObjet= data;
     
      
    })
  }

  desactiveCategorie(data : any){
    
    this.desactiveIdCategorie = data;
    this.service.getCategorieById(data).subscribe((data)=>{
      
      this.service.desactiveCategorie(this.desactiveIdCategorie,data).subscribe((data)=>{
        console.log('okkkkkkkkk',data);
        window.location.reload();
        this.route.navigateByUrl('/listCategorie', {skipLocationChange: true}).then(()=>
        this.route.navigate(['listCategorie']));
      }) 
    })
  }

  desactiveObjet(data:any){
    console.log('oooooooooooooooooooo',data);
    this.desactiveIdObjet = data;
    this.service.getObjetById(data).subscribe(data=>{
      console.log('mmmmmmmmmmmmmmmmmm',data);
      this.service.desactiveOblet(this.desactiveIdObjet, data).subscribe(data=>{
        window.location.reload();
        this.route.navigateByUrl('/listCategorie', {skipLocationChange: true}).then(()=>
        this.route.navigate(['listCategorie']));
      })
    })
  
  }
}
