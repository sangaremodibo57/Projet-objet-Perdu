import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabInfoPageRoutingModule } from './tab-info-routing.module';

import { TabInfoPage } from './tab-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabInfoPageRoutingModule
  ],
  declarations: [TabInfoPage]
})
export class TabInfoPageModule {}
