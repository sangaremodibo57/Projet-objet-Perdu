import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjettrouveserviceService } from '../Service/objettrouveservice.service';

@Component({
  selector: 'app-listeobjettrouve',
  templateUrl: './listeobjettrouve.component.html',
  styleUrls: ['./listeobjettrouve.component.scss']
})
export class ListeobjettrouveComponent implements OnInit {
  public listeAnnoncesTrouve : any = [];
  p: number = 1;
  constructor( private service :ObjettrouveserviceService,private route : Router) {}

  ngOnInit(): void {
    this.getAnnonce();
      
      
  }

  getAnnonce(){
    return this.service.getAllAnnonceTrouve().subscribe((data:any)=>{
      this.listeAnnoncesTrouve = data;
     
    })
  }
  suppAnnonce(data:any){
    this.service.deleteAnnonce(data).subscribe(data=>{
      window.location.reload();
      this.route.navigateByUrl('/listeobjettrouve', {skipLocationChange: true}).then(()=>
      this.route.navigate(['listeobjettrouve']));
    })
  }
  
}
