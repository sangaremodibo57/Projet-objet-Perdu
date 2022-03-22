import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Annonce } from 'src/app/Model/Annonce';
import { Reclamation } from 'src/app/Model/Reclamation';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage implements OnInit {
  slideOpts = {
    autoplay: {
      delay: 3000
  },
      on: {
        beforeInit() {
          const swiper = this;
          swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
          const overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true,
          };
          swiper.params = Object.assign(swiper.params, overwriteParams);
          swiper.params = Object.assign(swiper.originalParams, overwriteParams);
        },
        setTranslate() {
          const swiper = this;
          const { slides } = swiper;
          for (let i = 0; i < slides.length; i += 1) {
            const $slideEl = swiper.slides.eq(i);
            const offset$$1 = $slideEl[0].swiperSlideOffset;
            let tx = -offset$$1;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
              ty = tx;
              tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
              : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            $slideEl
              .css({
                opacity: slideOpacity,
              })
              .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
          }
        },
        setTransition(duration) {
          const swiper = this;
          const { slides, $wrapperEl } = swiper;
          slides.transition(duration);
          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            slides.transitionEnd(() => {
              if (eventTriggered) return;
              if (!swiper || swiper.destroyed) return;
              eventTriggered = true;
              swiper.animating = false;
              const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i]);
              }
            });
          }
        },
      }
    }
  
  //--------------------- 
  document : any ;
  telephone : any;
  listesCategorie : any=[];
  listesObjet :any;
  veri :any;
  cat: string = "men"; // default button
  
  annonce= new Annonce();
  ance : any;
  nom : any;
  date: any;
  contenu: any;
  lieu : any;
  etat:any;
  couleur:any;
  photo : any;
  utilisateur_id:any;
  reclamer= new Reclamation();
  
  userConnecte: any;
    idConnect: any;
    dataUser: any;
    test: Object;
    objetByCategorie: any[];
    es: any;
    dateveri: any;
    vR: any;
    resVerifieTrouve: any;
    resVerifieReclamation: any;
    
    resverifiePerdu: any;
    resulverifiePerdu: any;
    resulverifieTrouve: any;
    resulVerifieReclamation: any;
    DonneeUA: any;
    dataArray: any[] = [];
    dateNaissanceForm:any;
  objetAnnonce: any;
  verifieObjetPerdu: any;
  verifieObjetTrouve: any;
  
    constructor(private router : ActivatedRoute, public alertController: AlertController,private service : AnnonceServiceService, private route: Router) { 
      
    }
  
    ngOnInit() {
      this.allCategorieactive();
      this.allObjetActive();
      this.userConnecte = JSON.parse(localStorage.getItem('userData'))
      console.log('cccccccccccccccccccccccccccccccc',this.userConnecte);
      
    }
  
    allCategorieactive(){
      return this.service.getCategorieActive().subscribe(data=>{
        this.listesCategorie = data;
        console.log('llcccccllllccccclllccc',data);
        
      })
    }
    allObjetActive(){
      return this.service.getObjetActive().subscribe(data=>{
        this.listesObjet = data;
        console.log('lloooooollloooooollllooooo',data);
        
      })
    }
    
  
    registreForm(userForm:any) {
        this.annonce.nom = userForm.value['nom']
        this.annonce.date = userForm.value['datef']
        this.annonce.lieu = userForm.value['lieu']
        this.annonce.contenu = userForm.value['contenu']
        this.annonce.couleur = userForm.value['couleur']
        this.annonce.nomC = userForm.value['nomC']
        this.annonce.etat = 'active'
        if (userForm.value['nomC'] !== null) {
          this.annonce.photo='assets/objet/'+userForm.value['nomC']+'.jpg'
        } else {
          this.annonce.photo='vide'
        }
        this.annonce.statut='perdu'
        if (this.annonce.nomC == 7) {
          this.annonce.model = userForm.value['model']
        } else {
          this.annonce.model ='vide'
        }
        if (this.annonce.nomC == 3) {
          this.annonce.anneeObttion = userForm.value['anneeObttion']
          this.annonce.nomProprietaireDoc = userForm.value['nomProprietaireDoc']
          this.annonce.prenomProprietaireDoc = userForm.value['prenomProprietaireDoc']
          this.annonce.dateNaissanceDoc = userForm.value['dateNaissanceDoc']
        } else {
          this.annonce.anneeObttion ='vide'
          this.annonce.nomProprietaireDoc = 'vide'
          this.annonce.prenomProprietaireDoc = 'vide'
          this.annonce.dateNaissanceDoc = 'vide'
        }
        this.annonce.utilisateur = this.userConnecte;
        this.dateveri = formatDate(this.annonce.date, 'yyyy', 'en');

        //verification dans les objet Perdu pour eviter les doublons 
        this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'perdu',this.annonce.model,this.annonce.anneeObttion,this.annonce.nomProprietaireDoc,this.annonce.prenomProprietaireDoc,this.annonce.dateNaissanceDoc).subscribe((data: any)=>{
          console.log('donnée',data);
          this.objetAnnonce = data;
          if (data.length!== 0) {
            //parcour la liste pour verification user
            data.forEach(element => {
              if (element.utilisateur.id === this.userConnecte.id ) {
                this.dataArray.push(element);
              }
            });
            console.log("dataArray : ", this.dataArray);
            if (this.dataArray.length !== 0) {
              // Si user oui (Message error)
              const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                text: 'Vous avez dejà publier l\'annonce consulter mes publication',
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
                title: 'Erreur De Publication '
              })
              } else {
                // si user non (cherche des correspondance dans objet trouve)
                this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'trouve',this.annonce.model,this.annonce.anneeObttion,this.annonce.nomProprietaireDoc,this.annonce.prenomProprietaireDoc,this.annonce.dateNaissanceDoc).subscribe((data:any)=>{
                  this.verifieObjetTrouve = data;
                  console.log('resultat de la verifiation dans objet trouve',this.verifieObjetTrouve);
                  if (data.length !==0) {
                    // pour chercher des correspondance user
                    data.forEach(element => {
                      if (element.utilisateur.id === this.userConnecte.id ) {
                        this.dataArray.push(element);
                      }
                    });
                    console.log("dataArray : ", this.dataArray);
                    // si user oui (Message)
                    if (this.dataArray.length !== 0) {
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top',
                        text: 'Vous avez dejà publier l\'annonce consulter mes publication',
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
                        title: 'Erreur De Publication '
                      })
                    } else {
                      //si user non (reclamation)
                      console.log('reclamation on doit parcourire toute la liste');
                      for (let i = 0; i < this.verifieObjetPerdu.length; i++) {
                        // ajout Reclamation
                      this.reclamer.nom = this.annonce.nom
                      this.reclamer.lieu = this.annonce.lieu
                      this.reclamer.date = this.annonce.date
                      this.reclamer.couleur= this.annonce.couleur
                      this.reclamer.annonce= this.verifieObjetPerdu[i]
                      this.reclamer.user=this.userConnecte
                      this.reclamer.statut='coresp'
                      this.reclamer.certificate_perte='vide'
                      this.reclamer.description=this.annonce.contenu
                      this.reclamer.nomC = this.annonce.nomC
                      this.reclamer.model = this.annonce.model
                      this.reclamer.anneeObttion = this.annonce.anneeObttion
                      this.reclamer.etat = 'active'
                      if (this.annonce.nomC == 3) {
                        this.reclamer.anneeObttion = userForm.value['anneeObttion']
                        this.reclamer.nomProprietaireDoc = userForm.value['nomProprietaireDoc']
                        this.reclamer.prenomProprietaireDoc = userForm.value['prenomProprietaireDoc']
                        this.reclamer.dateNaissanceDoc = userForm.value['dateNaissanceDoc']
                      } else {
                        this.reclamer.anneeObttion ='vide'
                        this.reclamer.nomProprietaireDoc = 'vide'
                        this.reclamer.prenomProprietaireDoc = 'vide'
                        this.reclamer.dateNaissanceDoc = 'vide'
                      }
                      console.log('dataaaaaaaaaa',this.reclamer);
                      this.service.reclamer(this.reclamer).subscribe(data=>{
                        this.route.navigateByUrl('/home');
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
                    }
                  } else {
                    // pas de correspondance (publication)
                    console.log('publication annonce trouve');
                    //ajout Annonce
                    this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
                      this.ance=data;
                      this.route.navigateByUrl('/home');
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top',
                        text: 'Annonce Publier avec Succès ',
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
              }
          } else {
            // on cherche dabord les correspondant
            this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'trouve',this.annonce.model,this.annonce.anneeObttion,this.annonce.nomProprietaireDoc,this.annonce.prenomProprietaireDoc,this.annonce.dateNaissanceDoc).subscribe((data:any)=>{
              this.verifieObjetTrouve = data;
              console.log('resultat de la verifiation dans objet perdu',this.verifieObjetTrouve);
              if (data.length !==0) {
                // pour chercher des correspondance
                data.forEach(element => {
                  if (element.utilisateur.id === this.userConnecte.id ) {
                    this.dataArray.push(element);
                  }
                });
                console.log("dataArray : ", this.dataArray);
                if (this.dataArray.length !== 0) {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    text: 'Vous avez dejà publier l\'annonce consulter mes publication',
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
                    title: 'Erreur De Publication '
                  })
                } else {
                  console.log('reclamation on doit parcourire toute la liste');
                  for (let i = 0; i < this.verifieObjetTrouve.length; i++) {
                    // ajout Reclamation
                  this.reclamer.nom = this.annonce.nom
                  this.reclamer.lieu = this.annonce.lieu
                  this.reclamer.date = this.annonce.date
                  this.reclamer.couleur= this.annonce.couleur
                  this.reclamer.annonce= this.verifieObjetTrouve[i]
                  this.reclamer.user=this.userConnecte
                  this.reclamer.statut='coresp'
                  this.reclamer.certificate_perte='vide'
                  this.reclamer.description=this.annonce.contenu
                  this.reclamer.nomC = this.annonce.nomC
                  this.reclamer.model = this.annonce.model
                  this.reclamer.anneeObttion = this.annonce.anneeObttion
                  this.reclamer.etat = 'active'
                  if (this.annonce.nomC == 3) {
                    this.reclamer.anneeObttion = userForm.value['anneeObttion']
                    this.reclamer.nomProprietaireDoc = userForm.value['nomProprietaireDoc']
                    this.reclamer.prenomProprietaireDoc = userForm.value['prenomProprietaireDoc']
                    this.reclamer.dateNaissanceDoc = userForm.value['dateNaissanceDoc']
                  } else {
                    this.reclamer.anneeObttion ='vide'
                    this.reclamer.nomProprietaireDoc = 'vide'
                    this.reclamer.prenomProprietaireDoc = 'vide'
                    this.reclamer.dateNaissanceDoc = 'vide'
                  }
                  console.log('dataaaaaaaaaa',this.reclamer);
                  this.service.reclamer(this.reclamer).subscribe(data=>{
                    this.route.navigateByUrl('/home');
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
                }
              } else {
                console.log('publication annonce Perdu');
                //ajout Annonce
                this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
                  this.ance=data;
                  this.route.navigateByUrl('/home');
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    text: 'Annonce Publier avec Succès ',
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
          }
      })

        //verification dans les objet trouve 
        // this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'trouve',this.annonce.model,this.annonce.anneeObttion).subscribe((data:any) => {
        //   this.resVerifieTrouve = data;
        //   if (data.length !== 0) {
        //     // Comparaison des user
        //     data.forEach(element => {
        //       //Comparaison user
        //       if (element.utilisateur.id === this.userConnecte.id ) {
        //         this.dataArray.push(element);
        //       }
        //     });
        //     if (this.dataArray.length !== 0) {
        //       const Toast = Swal.mixin({
        //         toast: true,
        //         position: 'top',
        //         text: 'Vous avez dejà publier l\'annonce consulter mes publication',
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: true,
        //         didOpen: (toast) => {
        //           toast.addEventListener('mouseenter', Swal.stopTimer)
        //           toast.addEventListener('mouseleave', Swal.resumeTimer)
        //         }
        //       })
        //       Toast.fire({
        //         icon: 'error',
        //         title: 'Erreur De Publication '
        //       })
        //     } else {
        //       // verification si resVerifieTrouve existe dans Reclamation
        //       this.service.verifyReclamation(this.annonce.nom,this.annonce.lieu,this.annonce.couleur,this.dateveri,'nonvalide',this.annonce.model,this.annonce.anneeObttion).subscribe((data:any)=>{
        //         console.log("resultat GGGGGGGGGGGGGGGGGGGGGGGG");
        //         this.resVerifieReclamation = data;
        //         if (data.lenght !==0) {
        //           data.forEach(element => {
        //             //Comparaison user
        //             if (element.user.id === this.userConnecte.id ) {
        //               this.dataArray.push(element);
        //             }
        //           });
        //            // Comparaison des user
        //            if (this.dataArray.length!== 0 ) {
        //             const Toast = Swal.mixin({
        //               toast: true,
        //               position: 'top',
        //               text: 'Vous avez dejà publier l\'annonce consulter mes publication',
        //               showConfirmButton: false,
        //               timer: 3000,
        //               timerProgressBar: true,
        //               didOpen: (toast) => {
        //                 toast.addEventListener('mouseenter', Swal.stopTimer)
        //                 toast.addEventListener('mouseleave', Swal.resumeTimer)
        //               }
        //             })
        //             Toast.fire({
        //               icon: 'error',
        //               title: 'Erreur De Publication '
        //             })
        //           } else {
        //             // ajout Reclamation
        //             this.reclamer.nom = this.annonce.nom
        //             this.reclamer.lieu = this.annonce.lieu
        //             this.reclamer.date = this.annonce.date
        //             this.reclamer.couleur= this.annonce.couleur
        //             this.reclamer.annonce= this.resVerifieTrouve
        //             this.reclamer.user=this.userConnecte
        //             this.reclamer.statut='nonvalide'
        //             this.reclamer.certificate_perte='vide'
        //             this.reclamer.description=this.annonce.contenu
        //             this.reclamer.nomC = this.annonce.nomC
        //             this.reclamer.model = this.annonce.model
        //             this.reclamer.anneeObttion = this.annonce.anneeObttion
        //             this.reclamer.etat = 'active'
        //             console.log('dataaaaaaaaaa',this.reclamer);
        //             this.service.reclamer(this.reclamer).subscribe(data=>{
        //               this.route.navigateByUrl('/home');
        //               const Toast = Swal.mixin({
        //                 toast: true,
        //                 position: 'top',
        //                 text: 'Votre Demande est en cour de traitement ',
        //                 showConfirmButton: false,
        //                 timer: 3000,
        //                 timerProgressBar: true,
        //                 didOpen: (toast) => {
        //                   toast.addEventListener('mouseenter', Swal.stopTimer)
        //                   toast.addEventListener('mouseleave', Swal.resumeTimer)
        //                 }
        //               })
        //               Toast.fire({
        //                 icon: 'success',
                        
        //               })
        //             })
        //           }
        //         }else {
        //           // ajout Reclamation
                  
        //           this.reclamer.nom = this.annonce.nom
        //           this.reclamer.lieu = this.annonce.lieu
        //           this.reclamer.date = this.annonce.date
        //           this.reclamer.couleur= this.annonce.couleur
        //           this.reclamer.annonce= this.resVerifieTrouve
        //           this.reclamer.user=this.userConnecte
        //           this.reclamer.statut='nonvalide'
        //           this.reclamer.certificate_perte='vide'
        //           this.reclamer.description=this.annonce.contenu
        //           this.reclamer.nomC = this.annonce.nomC
        //           this.reclamer.model = this.annonce.model
        //           this.reclamer.anneeObttion = this.annonce.anneeObttion
        //           this.reclamer.etat = 'active'
        //           console.log('dataaaaaaaaaa',this.reclamer);
        //           this.service.reclamer(this.reclamer).subscribe(data=>{
        //             this.route.navigateByUrl('home');
        //             const Toast = Swal.mixin({
        //               toast: true,
        //               position: 'top',
        //               text: 'Votre Demande est en cour de traitement ',
        //               showConfirmButton: false,
        //               timer: 3000,
        //               timerProgressBar: true,
        //               didOpen: (toast) => {
        //                 toast.addEventListener('mouseenter', Swal.stopTimer)
        //                 toast.addEventListener('mouseleave', Swal.resumeTimer)
        //               }
        //             })
        //             Toast.fire({
        //               icon: 'success',
                      
        //             })
        //           })
        //         }
        //       }) 
        //     }
        //   } else {
        //     //verification dans objet Perdu
        //     this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'perdu',this.annonce.model,this.annonce.anneeObttion).subscribe((data:any)=>{
        //       this.resverifiePerdu = data;
        //       if (data.length !== 0) {
        //         // Comparaison user
        //         data.forEach(element => {
        //           //Comparaison user
        //           if (element.utilisateur.id === this.userConnecte.id ) {
        //             this.dataArray.push(element);
        //           }
        //         });
        //         if (this.dataArray.length !== 0) {
        //           const Toast = Swal.mixin({
        //             toast: true,
        //             position: 'top',
        //             text: 'Vous avez deja publier l\'annonce consulter mes publication"',
        //             showConfirmButton: false,
        //             timer: 3000,
        //             timerProgressBar: true,
        //             didOpen: (toast) => {
        //               toast.addEventListener('mouseenter', Swal.stopTimer)
        //               toast.addEventListener('mouseleave', Swal.resumeTimer)
        //             }
        //           })
        //           Toast.fire({
        //             icon: 'error',
        //           })
        //         } else {
        //            //ajout Annonce
        //         this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
        //           this.ance=data;
        //           this.route.navigateByUrl('/home');
        //           const Toast = Swal.mixin({
        //             toast: true,
        //             position: 'top',
        //             text: 'Annonce Publier avec Succés',
        //             showConfirmButton: false,
        //             timer: 3000,
        //             timerProgressBar: true,
        //             didOpen: (toast) => {
        //               toast.addEventListener('mouseenter', Swal.stopTimer)
        //               toast.addEventListener('mouseleave', Swal.resumeTimer)
        //             }
        //           })
        //           Toast.fire({
        //             icon: 'success',
        //           })
                  
        //         })
        //         } 
        //       } else {
        //        //ajout Annonce
        //         this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
        //           this.ance=data;
        //           this.route.navigateByUrl('/home');
        //           const Toast = Swal.mixin({
        //             toast: true,
        //             position: 'top',
        //             text: 'Annonce Publier avec Succès ',
        //             showConfirmButton: false,
        //             timer: 3000,
        //             timerProgressBar: true,
        //             didOpen: (toast) => {
        //               toast.addEventListener('mouseenter', Swal.stopTimer)
        //               toast.addEventListener('mouseleave', Swal.resumeTimer)
        //             }
        //           })
        //           Toast.fire({
        //             icon: 'success',
                    
        //           })
                  
        //         })
                
        //       } 
        //     })
        //   }
        // })
    }
  
  
  
  
  
  
  
    lC = [{id: 1}, {id: 2 }];
    nomC = this.lC[1]
    onChange(event:any) {
      this.nomC = event;
      console.log("event", this.nomC);
      if (event == 3) {
        this.document = false;
        console.log('docccccc', this.document);
        
      }
      if (event == 7) {
        this.telephone = false;
        console.log('docccccc', this.telephone);
        
      }
      this.objetByCategorie = [];
      this.service.getObjetActive().subscribe((data:any)=>{
        console.log('rtrtrtrtrtrtrtrtr',data);
        
        for (let i = 0; i < data.length; i++) {
          if (data[i].categorie.id == this.nomC) {
            this.objetByCategorie.push(data[i]);
            console.log('data : ', this.objetByCategorie);
  
            
          }
          
        }
      })
  }
  



    publierTrouve(formTrouve:any){
      this.annonce.nom = formTrouve.value['nom']
      this.annonce.date = formTrouve.value['datef']
      this.annonce.lieu = formTrouve.value['lieu']
      this.annonce.contenu = formTrouve.value['contenu']
      this.annonce.couleur = formTrouve.value['couleur']
      this.annonce.nomC = formTrouve.value['nomC']
      this.annonce.etat = 'active'
      if (formTrouve.value['nomC'] !== null) {
        this.annonce.photo='assets/objet/'+formTrouve.value['nomC']+'.jpg'
      } else {
        this.annonce.photo='vide'
      }
      this.annonce.statut='trouve'
      if (this.annonce.nomC == 7) {
        this.annonce.model = formTrouve.value['model']
      } else {
        this.annonce.model ='vide'
      }
      if (this.annonce.nomC == 3) {
        this.annonce.anneeObttion = formTrouve.value['anneeObttion']
        this.annonce.nomProprietaireDoc = formTrouve.value['nomProprietaireDoc']
        this.annonce.prenomProprietaireDoc = formTrouve.value['prenomProprietaireDoc']
        this.annonce.dateNaissanceDoc = formTrouve.value['dateNaissanceDoc']
      } else {
        this.annonce.anneeObttion ='vide'
        this.annonce.nomProprietaireDoc = 'vide'
        this.annonce.prenomProprietaireDoc = 'vide'
        this.annonce.dateNaissanceDoc = 'vide'
      }
      this.annonce.utilisateur = this.userConnecte;
      this.dateveri = formatDate(this.annonce.date, 'yyyy', 'en');
      console.log('annonce',this.annonce);
      //verification dans les objet trouve pour eviter les doublons 
      this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'trouve',this.annonce.model,this.annonce.anneeObttion,this.annonce.nomProprietaireDoc,this.annonce.prenomProprietaireDoc,this.annonce.dateNaissanceDoc).subscribe((data: any)=>{
        console.log('donnée',data);
        this.objetAnnonce = data;
        if (data.length!== 0) {
           //parcour la liste pour verification user
          data.forEach(element => {
            if (element.utilisateur.id === this.userConnecte.id ) {
              this.dataArray.push(element);
            }
          });
          console.log("dataArray : ", this.dataArray);
          if (this.dataArray.length !== 0) {
            // Si user oui (Message error)
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              text: 'Vous avez dejà publier l\'annonce consulter mes publication',
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
              title: 'Erreur De Publication '
            })
            } else {
              // si user non (cherche des correspondance dans objet perdu)
              this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'perdu',this.annonce.model,this.annonce.anneeObttion,this.annonce.nomProprietaireDoc,this.annonce.prenomProprietaireDoc,this.annonce.dateNaissanceDoc).subscribe((data:any)=>{
                this.verifieObjetPerdu = data;
                console.log('resultat de la verifiation dans objet perdu',this.verifieObjetPerdu);
                if (data.length !==0) {
                  // pour chercher des correspondance user
                  data.forEach(element => {
                    if (element.utilisateur.id === this.userConnecte.id ) {
                      this.dataArray.push(element);
                    }
                  });
                  console.log("dataArray : ", this.dataArray);
                  // si user oui (Message)
                  if (this.dataArray.length !== 0) {
                    const Toast = Swal.mixin({
                      toast: true,
                      position: 'top',
                      text: 'Vous avez dejà publier l\'annonce consulter mes publication',
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
                      title: 'Erreur De Publication '
                    })
                  } else {
                    //si user non (reclamation)
                    console.log('reclamation on doit parcourire toute la liste');
                    for (let i = 0; i < this.verifieObjetPerdu.length; i++) {
                       // ajout Reclamation
                    this.reclamer.nom = this.annonce.nom
                    this.reclamer.lieu = this.annonce.lieu
                    this.reclamer.date = this.annonce.date
                    this.reclamer.couleur= this.annonce.couleur
                    this.reclamer.annonce= this.verifieObjetPerdu[i]
                    this.reclamer.user=this.userConnecte
                    this.reclamer.statut='coresp'
                    this.reclamer.certificate_perte='vide'
                    this.reclamer.description=this.annonce.contenu
                    this.reclamer.nomC = this.annonce.nomC
                    this.reclamer.model = this.annonce.model
                    this.reclamer.anneeObttion = this.annonce.anneeObttion
                    this.reclamer.etat = 'active'
                    if (this.annonce.nomC == 3) {
                      this.reclamer.anneeObttion = formTrouve.value['anneeObttion']
                      this.reclamer.nomProprietaireDoc = formTrouve.value['nomProprietaireDoc']
                      this.reclamer.prenomProprietaireDoc = formTrouve.value['prenomProprietaireDoc']
                      this.reclamer.dateNaissanceDoc = formTrouve.value['dateNaissanceDoc']
                    } else {
                      this.reclamer.anneeObttion ='vide'
                      this.reclamer.nomProprietaireDoc = 'vide'
                      this.reclamer.prenomProprietaireDoc = 'vide'
                      this.reclamer.dateNaissanceDoc = 'vide'
                    }
                    console.log('dataaaaaaaaaa',this.reclamer);
                    this.service.reclamer(this.reclamer).subscribe(data=>{
                      this.route.navigateByUrl('/home');
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
                  }
                } else {
                  // pas de correspondance (publication)
                  console.log('publication annonce trouve');
                   //ajout Annonce
                  this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
                    this.ance=data;
                    this.route.navigateByUrl('/home');
                    const Toast = Swal.mixin({
                      toast: true,
                      position: 'top',
                      text: 'Annonce Publier avec Succès ',
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
            }
        } else {
          this.service.verifyAnnonce(this.annonce.nom, this.annonce.lieu,this.annonce.couleur,this.dateveri,'perdu',this.annonce.model,this.annonce.anneeObttion,this.annonce.nomProprietaireDoc,this.annonce.prenomProprietaireDoc,this.annonce.dateNaissanceDoc).subscribe((data:any)=>{
            this.verifieObjetPerdu = data;
            console.log('resultat de la verifiation dans objet perdu',this.verifieObjetPerdu);
            if (data.length !==0) {
              // pour chercher des correspondance
              data.forEach(element => {
                if (element.utilisateur.id === this.userConnecte.id ) {
                  this.dataArray.push(element);
                }
              });
              console.log("dataArray : ", this.dataArray);
              if (this.dataArray.length !== 0) {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top',
                  text: 'Vous avez dejà publier l\'annonce consulter mes publication',
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
                  title: 'Erreur De Publication '
                })
              } else {
                console.log('reclamation on doit parcourire toute la liste');
                for (let i = 0; i < this.verifieObjetPerdu.length; i++) {
                   // ajout Reclamation
                this.reclamer.nom = this.annonce.nom
                this.reclamer.lieu = this.annonce.lieu
                this.reclamer.date = this.annonce.date
                this.reclamer.couleur= this.annonce.couleur
                this.reclamer.annonce= this.verifieObjetPerdu[i]
                this.reclamer.user=this.userConnecte
                this.reclamer.statut='coresp'
                this.reclamer.certificate_perte='vide'
                this.reclamer.description=this.annonce.contenu
                this.reclamer.nomC = this.annonce.nomC
                this.reclamer.model = this.annonce.model
                this.reclamer.anneeObttion = this.annonce.anneeObttion
                this.reclamer.etat = 'active'
                if (this.annonce.nomC == 3) {
                  this.reclamer.anneeObttion = formTrouve.value['anneeObttion']
                  this.reclamer.nomProprietaireDoc = formTrouve.value['nomProprietaireDoc']
                  this.reclamer.prenomProprietaireDoc = formTrouve.value['prenomProprietaireDoc']
                  this.reclamer.dateNaissanceDoc = formTrouve.value['dateNaissanceDoc']
                } else {
                  this.reclamer.anneeObttion ='vide'
                  this.reclamer.nomProprietaireDoc = 'vide'
                  this.reclamer.prenomProprietaireDoc = 'vide'
                  this.reclamer.dateNaissanceDoc = 'vide'
                }
                console.log('dataaaaaaaaaa',this.reclamer);
                this.service.reclamer(this.reclamer).subscribe(data=>{
                  this.route.navigateByUrl('/home');
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
              }
            } else {
              console.log('publication annonce trouve');
               //ajout Annonce
              this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
                this.ance=data;
                this.route.navigateByUrl('/home');
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top',
                  text: 'Annonce Publier avec Succès ',
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
        }
      })

    } 
  }
  