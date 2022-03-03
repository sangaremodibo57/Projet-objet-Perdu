import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/GestionUser/Service/user-service.service';
import { AccueilServiceService } from '../Service/accueil-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  
  perdu: number = 1;
  trouve: number = 1;
  R: number = 3;
  nombreFemme : any;
  nombreHomme : any;
  nombre: any
  nombreTotal :any
  listeAnnoncesPerdu: any=[];
  recemmentTrouve: any=[];
  listesUser: any;
  infoReclame: any;
  nombreObjetPerdu: any;
  nombreObjetTrouve: any;
  constructor(private service : AccueilServiceService, private serviceuser : UserServiceService) { }

  ngOnInit(): void {
    this.afficheFemmeTs();
    this.afficheHommeTs();
    this.getAnnonce();
    this.AfficheUser();
    this.afficheReclame();
  }
  afficheFemmeTs(){
    return this.service.afficheFemmeService().subscribe(data=>{
      this.nombre = data;
      this.nombreFemme=this.nombre.length
    })
  }
  afficheHommeTs(){
    return this.service.afficheHommeService().subscribe(data=>{
      this.nombre = data;
      this.nombreHomme=this.nombre.length
      this.nombreTotal = parseInt(this.nombreFemme) +  parseInt(this.nombreHomme)
      
      
    })
  }
  getAnnonce(){
    return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
      let listeAnnonce = data;
      for (let i = 0; i <listeAnnonce.length; i++) {
        if (listeAnnonce[i].etat == 'perdu') {
          this.listeAnnoncesPerdu.push(listeAnnonce[i]);
          console.log('-------------PERDU',this.listeAnnoncesPerdu);
          this.nombreObjetPerdu = this.listeAnnoncesPerdu.length;
          
          
        }
        if (listeAnnonce[i].etat == 'trouve') {
          this.recemmentTrouve.push(listeAnnonce[i]);
          console.log('-------ttttt-------tttttt---------',this.recemmentTrouve);
          this.nombreObjetTrouve = this.recemmentTrouve.length;
          
        }
        
      }
      

      
    })
  }

  AfficheUser(){
    return this.serviceuser.listeUser().subscribe(data=>{
      this.listesUser = data;
    })
  }

  afficheReclame(){
    return this.service.getAllReclame().subscribe(data=>{
      console.log('reclamer ----------',data);
      this.infoReclame = data;
      console.log(this.infoReclame[1].id);
      
    })
  }

  modifierEtatDesactive(data: any){
    this.service.afficheByIdAnnonce(data).subscribe(datas =>{
      console.log('tessssssssssssssssssssssss',data);
      
    })
  }

  
}
