import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ObjettrouveserviceService } from '../Service/objettrouveservice.service';

@Component({
  selector: 'app-listeobjettrouve',
  templateUrl: './listeobjettrouve.component.html',
  styleUrls: ['./listeobjettrouve.component.scss']
})
export class ListeobjettrouveComponent implements OnInit {
  public listeAnnoncesTrouve : any = [];
  p: number = 1;
  detailUser: any;
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


// modifier eteat (Annonce pas use)
  modifierEtatDesactive(data: any){
    this.service.afficheByIdAnnonce(data).subscribe(datas =>{
      window.location.reload();
        this.route.navigateByUrl('/accueil', {skipLocationChange: true}).then(()=>
        this.route.navigate(['/accueil']));
    })
  }

  
}
