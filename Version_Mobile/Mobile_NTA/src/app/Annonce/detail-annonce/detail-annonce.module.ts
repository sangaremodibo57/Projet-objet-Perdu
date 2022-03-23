import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAnnoncePageRoutingModule } from './detail-annonce-routing.module';

import { DetailAnnoncePage } from './detail-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAnnoncePageRoutingModule
  ],
  declarations: [DetailAnnoncePage]
})
export class DetailAnnoncePageModule {}
