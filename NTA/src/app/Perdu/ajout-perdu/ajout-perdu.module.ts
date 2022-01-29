import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPerduPageRoutingModule } from './ajout-perdu-routing.module';

import { AjoutPerduPage } from './ajout-perdu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutPerduPageRoutingModule
  ],
  declarations: [AjoutPerduPage]
})
export class AjoutPerduPageModule {}
