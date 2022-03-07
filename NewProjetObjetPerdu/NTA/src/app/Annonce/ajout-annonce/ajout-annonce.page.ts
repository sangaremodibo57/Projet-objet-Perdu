import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/Model/Annonce';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import { AlertController } from '@ionic/angular';
import { Reclamation } from 'src/app/Model/Reclamation';

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
      if (userForm.value['nomC'] !=null) {
        this.annonce.photo='assets/objet/'+userForm.value['nomC']+'.jpg'
      } else {
        this.annonce.photo='vide'
      }
      this.annonce.statut='perdu'
      this.annonce.model = userForm.value['model']
      this.annonce.annee_obttion = userForm.value['annee_obttion']
      this.annonce.utilisateur = this.userConnecte;
      console.log('annonce : ', this.annonce);
      this.service.verify( this.annonce.nom, this.annonce.lieu, this.annonce.couleur).subscribe((data) =>{
        console.log('verification pour l annonce est ok et data : ',data);
        this.test = data;
        if (data != null) {
          
          if (this.test['utilisateur'].id == this.annonce.utilisateur.id) {
            this.alertController.create({
              cssClass:'my-custom-class',
              message: "Vous avez deja publier l'annonce consulter mes publication",
            }).then(res => {
        
              res.present();
              setTimeout(()=>res.dismiss(),2000);
            });
          } else {
            if (this.test['statut'] == 'trouve') {
              this.service.verifyReclame(this.annonce.nom,userForm.value['nomC'],this.annonce.couleur).subscribe((data:any)=>{
                console.log('verification recleme est okkk et data :',data);
                
                if (data!=null) {
                  if (this.userConnecte.id == data.user.id) {
                    this.alertController.create({
                      cssClass:'my-custom-class',
                      message: "Vous avez deja Reclamer l'annonce consulter mes publication",
                    }).then(res => {
                
                      res.present();
                      setTimeout(()=>res.dismiss(),2000);
                    });
                  } else {
                    this.reclamer.nom = this.annonce.nom
                    this.reclamer.couleur= this.annonce.couleur
                    this.reclamer.annonce= this.test
                    this.reclamer.user=this.userConnecte
                    this.reclamer.statut='nonvalide'
                    this.reclamer.certificate_perte='vide'
                    this.reclamer.description=this.annonce.contenu
                    this.reclamer.nomC =this.annonce.nomC
                    this.reclamer.annee_obttion = this.annonce.annee_obttion
                    this.reclamer.model = 'vide'
                    this.reclamer.etat = 'active'
                    this.service.reclamer(this.reclamer).subscribe(data=>{
                      this.route.navigateByUrl('tabs/tabs/tab1');
                      this.alertController.create({
                        cssClass:'my-custom-class',
                        message: 'Votre Demande est en cour de traitement ',
                      }).then(res => {
                  
                        res.present();
                        setTimeout(()=>res.dismiss(),2000);
                      });
                      
                    }) 
                  }
                } else {
                  console.log('les a ajoure ou reclamer',this.test);
                    this.reclamer.nom = this.annonce.nom
                    this.reclamer.couleur= this.annonce.couleur
                    this.reclamer.annonce= this.test
                    this.reclamer.user=this.userConnecte
                    this.reclamer.statut='nonvalide'
                    this.reclamer.certificate_perte='vide'
                    this.reclamer.description=this.annonce.contenu
                    this.reclamer.nomC =this.annonce.nomC
                    this.reclamer.annee_obttion = this.annonce.annee_obttion
                    this.reclamer.model = 'vide'
                    this.reclamer.etat = 'active'
                    console.log('reclame',this.reclamer);
                    
                    this.service.reclamer(this.reclamer).subscribe(data=>{
                      this.route.navigateByUrl('tabs/tabs/tab1');
                      this.alertController.create({
                        cssClass:'my-custom-class',
                        message: 'Votre Demande est en cour de traitement ',
                      }).then(res => {
                  
                        res.present();
                        setTimeout(()=>res.dismiss(),2000);
                      });
                      
                    }) 
                }
              }) 
            } else {
              this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
                this.ance=data;
                this.route.navigateByUrl('tabs/tabs/tab1');
      
                this.alertController.create({
                  cssClass:'my-custom-class',
                  message: 'Annonce Publier avec Succès ',
                }).then(res => {
            
                  res.present();
                  setTimeout(()=>res.dismiss(),2000);
                });
                
              }) 
            }
            
          }
          
        } else {     
          this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
            this.ance=data;
            this.route.navigateByUrl('tabs/tabs/tab1');
  
            this.alertController.create({
              cssClass:'my-custom-class',
              message: 'Annonce Publier avec Succès ',
            }).then(res => {
        
              res.present();
              setTimeout(()=>res.dismiss(),2000);
            });
            
          })
        }
  
      });

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
    this.annonce.nomC = formTrouve.value['nomC']
    this.annonce.date = formTrouve.value['datef']
    this.annonce.lieu = formTrouve.value['lieu']
    this.annonce.contenu = formTrouve.value['contenu']
    this.annonce.couleur = formTrouve.value['couleur']
    this.annonce.etat = 'active'
    if (formTrouve.value['nomC'] !=null) {
      this.annonce.photo='assets/objet/'+formTrouve.value['nomC']+'.jpg'
    } else {
      this.annonce.photo='vide'
    }
    this.annonce.statut='trouve'
    this.annonce.model =formTrouve.value['model']
    this.annonce.annee_obttion =formTrouve.value['annee_obttion']
    this.annonce.utilisateur = this.userConnecte;
    this.service.verify( this.annonce.nom, this.annonce.lieu, this.annonce.couleur).subscribe((data) =>{
      console.log('data : ',data);
      this.test = data;
      if (data != null) {
        
        if (this.test['utilisateur'].id == this.annonce.utilisateur.id) {
          this.alertController.create({
            cssClass:'my-custom-class',
            message: "Vous avez deja publier l'annonce consulter mes publication",
          }).then(res => {
      
            res.present();
            setTimeout(()=>res.dismiss(),2000);
          });
        } else {
          this.service.verifyReclame(this.annonce.nom,formTrouve.value['nomC'],this.annonce.couleur).subscribe((data:any)=>{
            if (data!=null) {
              if (this.userConnecte.id == data.user.id) {
                this.alertController.create({
                  cssClass:'my-custom-class',
                  message: "Vous avez deja Reclamer l'annonce consulter mes publication",
                }).then(res => {
            
                  res.present();
                  setTimeout(()=>res.dismiss(),2000);
                });
              } else {
                this.reclamer.nom = this.annonce.nom
                this.reclamer.couleur= this.annonce.couleur
                this.reclamer.annonce= this.test
                this.reclamer.user=this.userConnecte
                this.reclamer.statut='retrouve'
                this.reclamer.certificate_perte='vide'
                this.reclamer.description=this.annonce.contenu
                this.reclamer.nomC =this.annonce.nomC
                this.reclamer.annee_obttion = this.annonce.annee_obttion
                this.reclamer.model = 'vide'
                this.reclamer.etat = 'active'
                this.service.reclamer(this.reclamer).subscribe(data=>{
                  this.route.navigateByUrl('tabs/tabs/tab1');
                  this.alertController.create({
                    cssClass:'my-custom-class',
                    message: 'Votre Demande est en cour de traitement ',
                  }).then(res => {
              
                    res.present();
                    setTimeout(()=>res.dismiss(),2000);
                  });
                  
                }) 
              }
            } else {
              this.reclamer.nom = this.annonce.nom
                this.reclamer.couleur= this.annonce.couleur
                this.reclamer.annonce= this.test
                this.reclamer.user=this.userConnecte
                this.reclamer.statut='retrouve'
                this.reclamer.certificate_perte='vide'
                this.reclamer.description=this.annonce.contenu
                this.reclamer.nomC =this.annonce.nomC
                this.reclamer.annee_obttion = this.annonce.annee_obttion
                this.reclamer.model = 'vide'
                this.reclamer.etat = 'active'
              this.service.reclamer(data).subscribe(data=>{
                this.route.navigateByUrl('tabs/tabs/tab1');
                this.alertController.create({
                  cssClass:'my-custom-class',
                  message: 'Votre Demande est en cour de traitement ',
                }).then(res => {
            
                  res.present();
                  setTimeout(()=>res.dismiss(),2000);
                });
                
              }) 
            }
          })
        }
        
      } else {     
        this.service.ajoutAnnonce(this.annonce).subscribe(data=>{
          this.ance=data;
          this.route.navigateByUrl('tabs/tabs/tab1');

          this.alertController.create({
            cssClass:'my-custom-class',
            message: 'Annonce Publier avec Succès ',
          }).then(res => {
      
            res.present();
            setTimeout(()=>res.dismiss(),2000);
          });
          
        })
      }

    });

    
  } 
}
