import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/GestionUser/Service/user-service.service';
import { Notification } from 'src/app/Models/Notification';
import Swal from 'sweetalert2';
import { ReclamerServiceService } from '../Service/reclamer-service.service';

@Component({
  selector: 'app-reclamer',
  templateUrl: './reclamer.component.html',
  styleUrls: ['./reclamer.component.scss']
})
export class ReclamerComponent implements OnInit {
  p: number = 1;
  notification = new Notification;
  listeReclame: any;
  admin: any;
  adminConnect: any;
  infoReclame: any;
  reclamationById: any;
  AnnonceIdDesactive: any;
  annonceDesactive: any;
  reclamationDesactive: any;
  reclamationIdDesactive: any;
  listesUser: any;
  detailUser: any;
  listeReclamationdesactivevalide:any;

  constructor( private serviceuser : UserServiceService, private service :ReclamerServiceService, private route : Router) { }

  ngOnInit(): void {
    this.reclamer();
    this.AfficheUser();
    this.afficheReclame();
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin);
    this.Alldeclamationdesactivevalide();
  }

  reclamer(){
    return this.service.afficheReclame().subscribe(data=>{
      this.listeReclame = data;
      console.log(this.listeReclame);
      
    })
  }


   //user (User)
   AfficheUser(){
    return this.serviceuser.listeUser().subscribe(data=>{
      this.listesUser = data;
    })
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
  Alldeclamationdesactivevalide(){
    return this.service.getAllreclamationdesactivevalide().subscribe((datas)=>{
      console.log('les reclamations descatives', datas);
      this.listeReclamationdesactivevalide = datas;
    })
  }

}
