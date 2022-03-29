import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/GestionUser/Service/user-service.service';
import { Notification } from 'src/app/Models/Notification';
import Swal from 'sweetalert2';
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
  X: number = 2;
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
  detailUser: any;
  admin: any;
  reclamationById: any;
  adminConnect: any;
  constructor(private service : AccueilServiceService, private serviceuser : UserServiceService , private route : Router) { }

  ngOnInit(): void {
    this.afficheFemmeTs();
    this.afficheHommeTs();
    this.getAnnoncePerdu();
    this.getAnnonceTrouve();
    this.AfficheUser();
    this.afficheReclame();
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin);
  }

 
  //liste de tout les annonce
  afficheAnnonce(){
    return this.service.getAllAnnonce().subscribe(data=>{})
  }

  // affiche annonce par id (Annonce)
  detalUserAnnonce(id : any){
    this.service.afficherUserById(id).subscribe(data=>{
      this.detailUser = data;
      const Toast = Swal.mixin({
        imageUrl: '../../../assets/Accueil/logoUserAccueil.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        html:
            '<p> Nom : '+this.detailUser.nom_complet+'</p>' +
            '<p>Tel : '+this.detailUser.tel+'</p>',
        toast: true,
        showConfirmButton: false,
        
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        
      })
  
    })
  }
  
  // Desactiver L'annonce (Annonce)
  desactiveAnnonce(id : any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-10',
        cancelButton: 'btn btn-danger  m-10'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Non, annulez !',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.desactiveAnnonce(id, this.afficheAnnonce).subscribe(data=>{
          window.location.reload();
          this.route.navigateByUrl('/accueil', {skipLocationChange: true}).then(()=>
          this.route.navigate(['accueil']));
        })
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Suppression Annuler'
        })
      }
    })
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
  // liste objet Perdu (perdu)
  getAnnoncePerdu(){
    return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
     this.listeAnnoncesPerdu = data;
     this.nombreObjetPerdu = data.length
     console.log(this.listeAnnoncesPerdu);
     console.log(this.nombreObjetPerdu);
    })
  }

  // liste objet Perdu (trouve)
  getAnnonceTrouve(){
    return this.service.getAllAnnonceTrouve().subscribe((data:any)=>{
      this.listeAnnoncesTrouve = data;
      this.nombreObjetTrouve = data.length;
    })
  }



// modifier eteat (Annonce pas use)
  modifierEtatDesactive(data: any){
    this.service.afficheByIdAnnonce(data).subscribe(datas =>{
      window.location.reload();
        this.route.navigateByUrl('/accueil', {skipLocationChange: true}).then(()=>
        this.route.navigate(['/accueil']));
    })
  }

  //user (User)
  AfficheUser(){
    return this.serviceuser.listeUser().subscribe(data=>{
      this.listesUser = data;
    })
  }

  // reclamation active liste (Reclamation)
  afficheReclame(){
    return this.service.getAllReclameActive().subscribe(data=>{
     
      this.infoReclame = data;
    })
  }

 //Reclamation desactive
 desactiveReclamation(id : any){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success m-10',
      cancelButton: 'btn btn-danger  m-10'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous ne pourrez pas revenir en arrière !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimez-le !',
    cancelButtonText: 'Non, annulez !',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.getReclamationById(id).subscribe(data=>{
        this.reclamationById = data ;
        console.log('reclamation par id',this.reclamationById);
  
         // Notification
        this.notification.etat = 'active'
        this.notification.statut = 'nonvalide'
        this.notification.etatNotification= 'nonvue'
        this.notification.description='Votre demander a été refuser'
        this.notification.reclame = this.reclamationById;
        this.notification.admin = this.adminConnect;
        console.log('Notification', this.notification);
        //ajout Notification
        this.service.addNotification(this.notification).subscribe(data=>{
        })
        this.service.putReclamationEtatDesactive(id, this.reclamationById).subscribe(data=>{

        })
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      window.location.reload();
      this.route.navigateByUrl('/reclame', {skipLocationChange: true}).then(()=>
      this.route.navigate(['reclame']));
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Suppression Annuler'
      })
    }
  })
}


 //Validation des reclamation => desactive annonce,statut valide , reclamation et annonce
 ajoutNotification(data:any){
  // Annonce
   this.AnnonceIdDesactive = data.annonce.id;
   this.annonceDesactive = data.annonce;
   // reclamation
   this.reclamationDesactive = data;
   this.reclamationIdDesactive = data.id
   // Notification
   this.notification.etat = 'active'
   this.notification.statut = 'retrouve'
   this.notification.etatNotification= 'nonvue'
   this.notification.description='Objet est a vous contacter nous sur 77 04 92 70'
   this.notification.reclame = data;
   this.notification.admin = this.adminConnect;
   const swalWithBootstrapButtons = Swal.mixin({
     customClass: {
       confirmButton: 'btn btn-success m-10',
       cancelButton: 'btn btn-danger  m-10'
     },
     buttonsStyling: false
   })
   
   swalWithBootstrapButtons.fire({
     title: 'Êtes-vous sûr?',
     text: "Vous ne pourrez pas revenir en arrière !",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonText: 'Oui, Validez-le !',
     cancelButtonText: 'Non, annulez !',
     reverseButtons: true
   }).then((result) => {
     if (result.isConfirmed) {
       //ajout notification
       console.log('aaaaaaaaaaaaaaaaaaaaaa',this.notification);
       
       this.service.addNotification(this.notification).subscribe(data=>{
         console.log('okkkkkkkkkkkkkkkkkkkk',data);
         
       })
       //Desactive Annonce
       this.service.desactiveAnnonce(this.AnnonceIdDesactive, this.annonceDesactive).subscribe(data=>{
       })
       //desactive Reclamation

       this.service.desactiveReclamation(this.reclamationIdDesactive, this.reclamationDesactive).subscribe(data=>{
         window.location.reload();
         this.route.navigateByUrl('/accueil', {skipLocationChange: true}).then(()=>
         this.route.navigate(['accueil']));
       })
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 4000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })
       
       Toast.fire({
         icon: 'success',
         title: 'Signed in successfully'
       })
     } else if (
       /* Read more about handling dismissals below */
       result.dismiss === Swal.DismissReason.cancel
     ) {
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 4000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })
       
       Toast.fire({
         icon: 'error',
         title: 'Suppression Annuler'
       })
     }
   })
 }
}
