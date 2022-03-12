import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NotificationServiceService } from '../Notification/Service/notification-service.service';
import { Tab3ServiceService } from './Service/tab3-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public slideOpts = {
    slidesPerView: 1,
    spaceBetween:1,
    initialSlide:1,
    loop: true,
    autoplay: {
          delay: 2000
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 2,
      modifier: 1,
      slideShadows: true,
      
    },
    on: {
      beforeInit() {
        const swiper = this;
  
        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
  
           let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);
  
           let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
          let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
  
           // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
  
           const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
           $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
          }
        }
  
         // Set correct perspective for IE10
        if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
      }
    }
  }
filterTerm: string;
cp: number = 1;
  user: string;
  userConnecte: any;
  test :boolean;
  private listeAnnoncesTrouve : any 
  private recemmentTrouve : any
  private recemmentPerdu : any 
  private recemmentPerdu5 : any 
  myNotification: any;
  nombre: any;
  indice: boolean;
  constructor(private srvc : NotificationServiceService,private route : Router, private service : Tab3ServiceService, public alertController: AlertController) {}
  ngOnInit(): void {
    this.getAnnonce();
    this.getAnnonce();
    this.userConnecte = JSON.parse(localStorage.getItem('userData'))
    console.log(this.userConnecte);
    if (this.userConnecte === null) {
    this.test=true;
     console.log(this.test);
      
    }else{
      this.test=false;
      console.log(this.test);
    }

     //notification
     this.srvc.listeNoticationByUser(this.userConnecte.id).subscribe(data=>{
      console.log('okkkkkkkkkkkkkkkk',data);
      this.myNotification = data;
      this.nombre = this.myNotification.length;
      console.log(this.nombre);
      if (this.nombre > 0) {
        this.indice = true
      }
    })


  }
  logout(){
    localStorage.removeItem('userData')
    localStorage.clear();
    
  }
  showAlertA() {

    this.alertController.create({
      message: 'Veillez vous connecter pour pouvoir faire une annonce',
    }).then(res => {

      res.present();
      setTimeout(() => res.dismiss(), 2000);
    });

  }
  showAlertR() {

    this.alertController.create({
      message: 'Veillez vous connecter pour pouvoir Reclamer un Objet',
    }).then(res => {

      res.present();
      setTimeout(()=>res.dismiss(),2000);
    });

  }

  getAnnonce(){
    return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
      this.listeAnnoncesTrouve= data;
    })
  }

}
