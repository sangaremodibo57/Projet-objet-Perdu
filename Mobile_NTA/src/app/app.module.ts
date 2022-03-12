import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';
 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
	
import {NgxPaginationModule} from 'ngx-pagination';

import { SwiperModule } from 'swiper/angular';

import { PipesModule } from 'pipes-module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [PipesModule,SwiperModule,NgxPaginationModule,Ng2SearchPipeModule,HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
