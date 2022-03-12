import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerduPageRoutingModule } from './perdu-routing.module';

import { PerduPage } from './perdu.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerduPageRoutingModule
  ],
  declarations: [PerduPage]
})
export class PerduPageModule {}
