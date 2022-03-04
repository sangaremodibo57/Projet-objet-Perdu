import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/GestionUser/Service/user-service.service';
import { Notification } from 'src/app/Models/Notification';
import { AccueilServiceService } from '../Service/accueil-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  notification = new Notification;
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
  listeAnnoncesTrouve: any;
  AnnonceIdDesactive: any;
  annonceDesactive: any;
  reclamationDesactive: any;
  reclamationIdDesactive: any;
  constructor(private service : AccueilServiceService, private serviceuser : UserServiceService) { }

  ngOnInit(): void {
    this.afficheFemmeTs();
    this.afficheHommeTs();
    this.getAnnoncePerdu();
    this.getAnnonceTrouve();
    this.AfficheUser();
    this.afficheReclame();
  }


  ajoutNotification(data:any){
    console.log('je suis dataaaaaaaaaaaaaaaaaaa',data);
    this.AnnonceIdDesactive = data.annonce.id;
    this.annonceDesactive = data.annonce;
    this.reclamationDesactive = data;
    this.reclamationIdDesactive = data.id


    this.notification.etat = 'active'
    this.notification.description='Objet est a vous contacter nous sur 77 04 92 70'
    this.notification.reclame = data;
   

    this.service.desactiveReclamation(this.reclamationIdDesactive,this.reclamationDesactive).subscribe(data=>{
      console.log('reclamation Desactive',data);
      
    })


    
    this.service.addNotification(this.notification).subscribe(data=>{
     
      
     
    })

    this.service.desactiveAnnonce(this.AnnonceIdDesactive, this.annonceDesactive).subscribe(data=>{
      console.log(data);
      console.log('annonce desactive');

    })
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',this.reclamationIdDesactive,this.reclamationDesactive);
    
   

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

  getAnnoncePerdu(){
    return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
     this.listeAnnoncesPerdu = data;
      
    })
  }

  getAnnonceTrouve(){
    return this.service.getAllAnnonceTrouve().subscribe((data:any)=>{
      this.listeAnnoncesTrouve = data;
     
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
    return this.service.getAllReclameActive().subscribe(data=>{
      console.log('reclamer ----------',data,'rrrrrrrrrrr');
      this.infoReclame = data;
    })
  }

  modifierEtatDesactive(data: any){
    this.service.afficheByIdAnnonce(data).subscribe(datas =>{
      
    })
  }

  
}
