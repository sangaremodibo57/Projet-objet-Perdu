import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutAnnoncePageRoutingModule } from './ajout-annonce-routing.module';

import { AjoutAnnoncePage } from './ajout-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutAnnoncePageRoutingModule
  ],
  declarations: [AjoutAnnoncePage]
})
export class AjoutAnnoncePageModule {}
