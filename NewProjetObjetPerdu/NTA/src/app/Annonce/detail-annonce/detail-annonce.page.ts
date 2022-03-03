import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/app/Model/Reclamation';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.page.html',
  styleUrls: ['./detail-annonce.page.scss'],
})
export class DetailAnnoncePage implements OnInit {
  reclamer= new Reclamation();
  id : any;
  nom : any;
  description: any;
  couleur:any;
  statut:any;
  objet_id:any;
  certificate_perte:any;
  user:any;
  annonce:any;


  addreclame:any;
  objet:any;
  userConnecte: any;
  reponse: Object;
  constructor(public alertController: AlertController, private route : ActivatedRoute, private service : AnnonceServiceService, private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.detailAnnonce(this.id).subscribe(data=>{
      this.objet = data;
      console.log(this.objet);
      
    this.userConnecte = JSON.parse(localStorage.getItem('userData'))
    console.log(this.userConnecte);
      
    })
    
  }
  
  

  reclamerObjet(formReclame:NgForm){
    
    if (this.objet.nomC == 'DOCUMENTS') {

      this.reclamer.nom = this.objet.nom
      this.reclamer.couleur= formReclame.value['couleur']
      this.reclamer.annonce= this.objet
      this.reclamer.user=this.userConnecte
      this.reclamer.statut='nonvalide'
      this.reclamer.certificate_perte='vide'
      this.reclamer.description=formReclame.value['description']
      this.reclamer.annee_obttion = formReclame.value['annee_obttion']
      this.reclamer.nomC =this.objet.nomC
      this.reclamer.model = 'vide'
      this.reclamer.etat = 'active'
      this.service.verifyReclame( this.reclamer.nom, this.reclamer.nomC, this.reclamer.couleur).subscribe((data) =>{
        console.log('data : ',data);
        this.reponse = data;
        if (this.reponse != null) {
          if (this.reponse['user'].id == this.userConnecte.id) {
            this.alertController.create({
              cssClass:'my-custom-class',
              message: "Vous avez deja Réclamer l'annonce consulter mes publication",
            }).then(res => {
        
              res.present();
        
            });
          } else {
            this.service.reclamer(this.reclamer).subscribe(data=>{
              this.addreclame = data;
              console.log(this.addreclame);
              
              this.router.navigateByUrl('tabs/tabs/tab1');
              this.alertController.create({
                cssClass:'my-custom-class',
                message: 'Votre Demande est en cour de traitement ',
              }).then(res => {
          
                res.present();
          
              });
              
            })
          } 
      } else {
        this.service.reclamer(this.reclamer).subscribe(data=>{
          this.addreclame = data;
          console.log(this.addreclame);
          
          this.router.navigateByUrl('tabs/tabs/tab1');
          this.alertController.create({
            cssClass:'my-custom-class',
            message: 'Votre Demande est en cour de traitement ',
          }).then(res => {
      
            res.present();
      
          });
          
        })
      }
  
      });
      
    } else if (this.objet.nomC == 'TELEPHONE') {
      this.reclamer.nom = this.objet.nom
      this.reclamer.couleur= formReclame.value['couleur']
      this.reclamer.annonce= this.objet
      this.reclamer.user=this.userConnecte
      this.reclamer.statut='nonvalide'
      this.reclamer.certificate_perte='vide'
      this.reclamer.description=formReclame.value['description']
      this.reclamer.annee_obttion = 'vide'
      this.reclamer.nomC =this.objet.nomC
      this.reclamer.model = formReclame.value['model']
      this.reclamer.etat = 'active'
      this.service.verifyReclame( this.reclamer.nom, this.reclamer.nomC, this.reclamer.couleur).subscribe((data) =>{
        console.log('data : ',data);
        this.reponse = data;
        if (this.reponse != null) {
          if (this.reponse['user'].id == this.userConnecte.id) {
            this.alertController.create({
              cssClass:'my-custom-class',
              message: "Vous avez deja Réclamer l'annonce consulter mes publication",
            }).then(res => {
        
              res.present();
        
            });
          } else {
            this.service.reclamer(this.reclamer).subscribe(data=>{
              this.addreclame = data;
              console.log(this.addreclame);
              
              this.router.navigateByUrl('tabs/tabs/tab1');
              this.alertController.create({
                cssClass:'my-custom-class',
                message: 'Votre Demande est en cour de traitement ',
              }).then(res => {
          
                res.present();
          
              });
              
            })
          } 
      } else {
        this.service.reclamer(this.reclamer).subscribe(data=>{
          this.addreclame = data;
          console.log(this.addreclame);
          
          this.router.navigateByUrl('tabs/tabs/tab1');
          this.alertController.create({
            cssClass:'my-custom-class',
            message: 'Votre Demande est en cour de traitement ',
          }).then(res => {
      
            res.present();
      
          });
          
        })
      }
  
      });
    } else{
      this.reclamer.nom = this.objet.nom
      this.reclamer.couleur= formReclame.value['couleur']
      this.reclamer.annonce= this.objet
      this.reclamer.user=this.userConnecte
      this.reclamer.statut='nonvalide'
      this.reclamer.certificate_perte='vide'
      this.reclamer.description=formReclame.value['description']
      this.reclamer.annee_obttion = 'vide'
      this.reclamer.nomC =this.objet.nomC
      this.reclamer.model = 'vide'
      this.reclamer.etat = 'active'
      console.log('rrrrrrrrrrrrrrrrrreclammmmmmmmm',this.reclamer);
      
      this.service.verifyReclame( this.reclamer.nom, this.reclamer.nomC, this.reclamer.couleur).subscribe((data) =>{
        console.log('data : ',data);
        this.reponse = data;
        if (this.reponse != null) {
          if (this.reponse['user'].id == this.userConnecte.id) {
            this.alertController.create({
              cssClass:'my-custom-class',
              message: "Vous avez deja Réclamer l'annonce consulter mes publication",
            }).then(res => {
        
              res.present();
        
            });
          } else {
            this.service.reclamer(this.reclamer).subscribe(data=>{
              this.addreclame = data;
              console.log(this.addreclame);
              
              this.router.navigateByUrl('tabs/tabs/tab1');
              this.alertController.create({
                cssClass:'my-custom-class',
                message: 'Votre Demande est en cour de traitement ',
              }).then(res => {
          
                res.present();
          
              });
              
            })
          } 
      } else {
        this.service.reclamer(this.reclamer).subscribe(data=>{
          this.addreclame = data;
          console.log(this.addreclame);
          
          this.router.navigateByUrl('tabs/tabs/tab1');
          this.alertController.create({
            cssClass:'my-custom-class',
            message: 'Votre Demande est en cour de traitement ',
          }).then(res => {
      
            res.present();
      
          });
          
        })
      }
  
      });
    }

    // if ( this.objet.nomC == 'DOCUMENTS') {
    //   this.reclamer.nom = this.objet.nom
    //   this.reclamer.couleur= formReclame.value['couleur']
    //   this.reclamer.annonce= this.objet
    //   this.reclamer.user=this.userConnecte
    //   this.reclamer.statut='nonvalide'
    //   this.reclamer.certificate_perte='vide'
    //   this.reclamer.description=formReclame.value['description']
    //   this.reclamer.annee_obttion = formReclame.value['annee_obttion']
    //   this.reclamer.nomC =this.objet.nomC
    //   this.reclamer.model = 'vide'
    //   this.reclamer.etat = 'active'
    //   this.reclamer.photo='assets/objet/'+this.objet.nomC+'.jpg'
    //   this.service.verify( this.reclamer.nom, this.objet.lieu, this.reclamer.couleur).subscribe((data) =>{
    //     console.log('data : ',data);
    //     this.reponse = data;
    //     if (this.reponse != null) {
    //       this.service.reclamer(this.reclamer).subscribe(data=>{
    //       this.addreclame = data;
    //       console.log(this.addreclame);
          
    //       this.router.navigateByUrl('tabs/tabs/tab1');
    //       this.alertController.create({
    //         cssClass:'my-custom-class',
    //         message: 'Votre Demande est en cour de traitement ',
    //       }).then(res => {
      
    //         res.present();
      
    //       });
          
    //     }) 
    //   } else {
    //     this.router.navigateByUrl('tabs/tabs/tab1');
    //     this.alertController.create({
    //       cssClass:'my-custom-class',
    //       message: 'Les doonées ne corresponde pas ',
    //     }).then(res => {
    
    //       res.present();
    
    //     });
    //   }
  
    //   });
      
    // } else if (this.objet.nomC == 'TELEPHONE') {
    //   if ( this.objet.nomC == 'DOCUMENTS') {
    //     this.reclamer.nom = this.objet.nom
    //     this.reclamer.couleur= formReclame.value['couleur']
    //     this.reclamer.annonce= this.objet
    //     this.reclamer.user=this.userConnecte
    //     this.reclamer.statut='nonvalide'
    //     this.reclamer.certificate_perte='vide'
    //     this.reclamer.description=formReclame.value['description']
    //     this.reclamer.annee_obttion = formReclame.value['annee_obttion']
    //     this.reclamer.nomC =this.objet.nomC
    //     this.reclamer.model = 'vide'
    //     this.reclamer.etat = 'active'
    //     this.reclamer.photo='assets/objet/'+this.objet.nomC+'.jpg'
    //     this.service.verify( this.reclamer.nom, this.objet.lieu, this.reclamer.couleur).subscribe((data) =>{
    //       console.log('data : ',data);
    //       this.reponse = data;
    //       if (this.reponse != null) {
    //         this.service.reclamer(this.reclamer).subscribe(data=>{
    //         this.addreclame = data;
    //         console.log(this.addreclame);
            
    //         this.router.navigateByUrl('tabs/tabs/tab1');
    //         this.alertController.create({
    //           cssClass:'my-custom-class',
    //           message: 'Votre Demande est en cour de traitement ',
    //         }).then(res => {
        
    //           res.present();
        
    //         });
            
    //       }) 
    //     } else {
    //       this.router.navigateByUrl('tabs/tabs/tab1');
    //       this.alertController.create({
    //         cssClass:'my-custom-class',
    //         message: 'Les doonées ne corresponde pas ',
    //       }).then(res => {
      
    //         res.present();
      
    //       });
    //     }
    
    //     });
    // } else {
      
    //     this.reclamer.nom = this.objet.nom
    //     this.reclamer.couleur= formReclame.value['couleur']
    //     this.reclamer.annonce= this.objet
    //     this.reclamer.user=this.userConnecte
    //     this.reclamer.statut='nonvalide'
    //     this.reclamer.certificate_perte='vide'
    //     this.reclamer.description=formReclame.value['description']
    //     this.reclamer.annee_obttion = 'vide'
    //     this.reclamer.nomC =this.objet.nomC
    //     this.reclamer.model = 'vide'
    //     this.reclamer.etat = 'active'
    //     this.service.verify( this.reclamer.nom, this.objet.lieu, this.reclamer.couleur).subscribe((data) =>{
    //       console.log('data : ',data);
    //       this.reponse = data;
    //       if (this.reponse != null) {
    //         if (this.reponse['user'].id == this.reclamer.user) {
    //           this.alertController.create({
    //             cssClass:'my-custom-class',
    //             message: "Vous avez deja Réclamer l'annonce consulter mes publication",
    //           }).then(res => {
          
    //             res.present();
          
    //           });
    //         } else {
    //           this.service.reclamer(this.reclamer).subscribe(data=>{
    //             this.addreclame = data;
    //             console.log(this.addreclame);
                
    //             this.router.navigateByUrl('tabs/tabs/tab1');
    //             this.alertController.create({
    //               cssClass:'my-custom-class',
    //               message: 'Votre Demande est en cour de traitement ',
    //             }).then(res => {
            
    //               res.present();
            
    //             });
                
    //           })
    //         } 
    //     } else {
    //       this.router.navigateByUrl('tabs/tabs/tab1');
    //       this.alertController.create({
    //         cssClass:'my-custom-class',
    //         message: 'Les doonées ne corresponde pas ',
    //       }).then(res => {
      
    //         res.present();
      
    //       });
    //     }
    
    //     });

    // }

    // }

  } 
  
}
