import { Component, OnInit } from '@angular/core';
import { CategorieObjetServiceService } from '../../Service/categorie-objet-service.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {
  listeCategorie: any;
  listeObjet: any;

  constructor(private service : CategorieObjetServiceService) { }

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
      console.log('oooooooooooooooooooo',data);
      
    })
  }
}
