import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeNotificationPageRoutingModule } from './liste-notification-routing.module';

import { ListeNotificationPage } from './liste-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeNotificationPageRoutingModule
  ],
  declarations: [ListeNotificationPage]
})
export class ListeNotificationPageModule {}
