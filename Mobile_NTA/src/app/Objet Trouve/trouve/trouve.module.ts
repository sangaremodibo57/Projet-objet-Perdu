import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrouvePageRoutingModule } from './trouve-routing.module';

import { TrouvePage } from './trouve.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TrouvePageRoutingModule
  ],
  declarations: [TrouvePage]
})
export class TrouvePageModule {}
