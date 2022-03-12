import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/home/home Service/home-service.service';
import { InfoServiceService } from '../Service/info-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  v = 0.2;
  b = 0.2;

  slideOpts = {
    autoplay: {
      delay: 4000
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

  TobjetPer: Object;
  nombreObjetPerdu:any;
  nombreObjetTrouve:any;
  listeAnnoncesPerdu: any=[];
  listeAnnoncesTrouve: any=[];
  nombreFemme : any;
  nombreHomme : any;
  nombre: any
  nombreTotal :any


  constructor(private route : Router, private service : InfoServiceService , private servicep: HomeServiceService) { }

  ngOnInit() {
    this.getAnnoncePerdu();
    this.getAnnonceTrouve();
  }
 
  getAnnoncePerdu(){
    return this.service.getAllAnnoncePerdu().subscribe((data:any)=>{
      this.listeAnnoncesPerdu = data;
      this.nombreObjetPerdu = this.listeAnnoncesPerdu.length;
      
    })
  }
  getAnnonceTrouve(){
    return this.service.getAllAnnonceTrouve().subscribe((data:any)=>{
      this.listeAnnoncesTrouve = data;
      this.nombreObjetTrouve = this.listeAnnoncesTrouve.length;
    })
  }
}