import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProfilPageRoutingModule } from './detail-profil-routing.module';

import { DetailProfilPage } from './detail-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProfilPageRoutingModule
  ],
  declarations: [DetailProfilPage]
})
export class DetailProfilPageModule {}
