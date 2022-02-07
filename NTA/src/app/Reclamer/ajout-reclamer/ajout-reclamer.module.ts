import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutReclamerPageRoutingModule } from './ajout-reclamer-routing.module';

import { AjoutReclamerPage } from './ajout-reclamer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutReclamerPageRoutingModule
  ],
  declarations: [AjoutReclamerPage]
})
export class AjoutReclamerPageModule {}
