import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule ,Ng2GoogleChartsModule,BrowserModule,FormsModule,ReactiveFormsModule ,IonicModule.forRoot(), AppRoutingModule],
  providers: [FormsModule,NgForm,{ provide: RouteReuseStrategy ,useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
