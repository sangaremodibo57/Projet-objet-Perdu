import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetperduserviceService } from '../Service/objetperduservice.service';
import {Ng2SearchPipe} from 'ng2-search-filter';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listeobjetperdu',
  templateUrl: './listeobjetperdu.component.html',
  styleUrls: ['./listeobjetperdu.component.scss']
})
export class ListeobjetperduComponent implements OnInit {
  public listeAnnoncesPerdu : any = [];
  p: number = 1;
  searchText ='';
  pageOfItems: Array<any> | undefined;
  detailUser: any;
  constructor( private service :ObjetperduserviceService,private route : Router) {}

  ngOnInit(): void {
    this.getAnnonce();
    this.getAnnoncePerdu();
   
      
      
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

getAnnonce(){
  return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
   this.listeAnnoncesPerdu = data;
    
  })
}
  suppAnnonce(data:any){
    this.service.deleteAnnonce(data).subscribe(data=>{
      window.location.reload();
      this.route.navigateByUrl('/listeobjetperdu', {skipLocationChange: true}).then(()=>
      this.route.navigate(['listeobjetperdu']));
    })
  }

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


   // Desactiver L'annonce
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
        this.service.desactiveAnnonce(id, this.getAnnoncePerdu).subscribe(data=>{
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

  getAnnoncePerdu(){
    return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
     this.listeAnnoncesPerdu = data;
    })
  }
  

  modifierEtatDesactive(data: any){
    this.service.afficheByIdAnnonce(data).subscribe(datas =>{
      window.location.reload();
        this.route.navigateByUrl('/accueil', {skipLocationChange: true}).then(()=>
        this.route.navigate(['/accueil']));
    })
  }
}
