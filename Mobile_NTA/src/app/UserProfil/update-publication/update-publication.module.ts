import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePublicationPageRoutingModule } from './update-publication-routing.module';

import { UpdatePublicationPage } from './update-publication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePublicationPageRoutingModule
  ],
  declarations: [UpdatePublicationPage]
})
export class UpdatePublicationPageModule {}
