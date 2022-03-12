import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Reclamation } from 'src/app/Model/Reclamation';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import Swal from 'sweetalert2';
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
  document: boolean;
  telephone: boolean;
  dateveri: any;
  dataArray: any[] = [];
  constructor(public alertController: AlertController, private route : ActivatedRoute, private service : AnnonceServiceService, private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.detailAnnonce(this.id).subscribe(data=>{
      this.objet = data;
      if (this.objet.nomC == '3') {
        this.document = true
        console.log('document',this.document);
        
      } else if (this.objet.nomC == '7') {
        this.telephone = true
        console.log('telephone',this.telephone);
        
      }
      console.log(this.objet);
      
    this.userConnecte = JSON.parse(localStorage.getItem('userData'))
    console.log(this.userConnecte);
      
    })
    
  }
  
  

  reclamerObjet(formReclame:NgForm){
    this.reclamer.nom = this.objet.nom
    this.reclamer.lieu = formReclame.value['lieu']
    this.reclamer.couleur= formReclame.value['couleur']
    this.reclamer.annonce= this.objet
    this.reclamer.user=this.userConnecte
    this.reclamer.statut='nonvalide'
    this.reclamer.certificate_perte='vide'
    this.reclamer.description=formReclame.value['description']
    this.reclamer.nomC =this.objet.nomC
    this.reclamer.model = 'vide'
    this.reclamer.etat = 'active'
    if (this.reclamer.nomC == '7') {
      this.reclamer.model = formReclame.value['model']
    } else {
      this.reclamer.model ='vide'
    }
    if (this.reclamer.nomC == '3') {
      this.reclamer.anneeObttion = formReclame.value['anneeObttion']
    } else {
      this.reclamer.anneeObttion ='vide'
    }
    this.reclamer.user = this.userConnecte;
    this.dateveri = formatDate(this.objet.date, 'yyyy', 'en');
    if (this.reclamer.couleur === formReclame.value['couleur'] && this.reclamer.lieu === formReclame.value['lieu'] && this.reclamer.annonce.utilisateur.id === this.userConnecte.id && this.reclamer.model === formReclame.value['model'] && this.reclamer.anneeObttion === formReclame.value['anneeObttion'] ) {
      this.router.navigateByUrl('tabs/tabs/tab1');
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        text: 'Vous avez déjà publier cette annonce verifie votre publication ',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
      })
    } else{
      if (this.reclamer.couleur === formReclame.value['couleur'] && this.reclamer.lieu === formReclame.value['lieu'] && this.reclamer.model === formReclame.value['model'] && this.reclamer.anneeObttion === formReclame.value['anneeObttion'] ) {
        this.service.verifyReclamation(this.reclamer.nom,this.reclamer.lieu,this.reclamer.couleur,this.dateveri,'nonvalide',this.reclamer.model,this.reclamer.anneeObttion).subscribe((data:any)=>{
          if (data.length !== 0) {
            data.forEach(element => {
              //Comparaison user
              if (element.user.id === this.userConnecte.id ) {
                this.dataArray.push(element);
              }
            });
            if (this.dataArray.length !== 0) {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                text: 'Vous avez deja Réclamer l\'annonce consulter mes publication',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
              })
            } else {
              this.service.reclamer(this.reclamer).subscribe(data=>{
                this.addreclame = data;
                console.log(this.addreclame);
                
                this.router.navigateByUrl('tabs/tabs/tab1');
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top',
                  text: 'Votre Demande est en cour de traitement ',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                Toast.fire({
                  icon: 'success',
                })
              })
            }
          } else {
            this.service.reclamer(this.reclamer).subscribe(data=>{
              this.addreclame = data;
              console.log(this.addreclame);
              
              this.router.navigateByUrl('tabs/tabs/tab1');
              const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                text: 'Votre Demande est en cour de traitement ',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'success',
              })
            })
          }
        })
      } else {
        this.router.navigateByUrl('tabs/tabs/tab1');
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        text: 'Les données ne ccorresponde pas ',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
      })
      }
      
    }
  }


  }