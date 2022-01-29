import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteNotificationPageRoutingModule } from './delete-notification-routing.module';

import { DeleteNotificationPage } from './delete-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteNotificationPageRoutingModule
  ],
  declarations: [DeleteNotificationPage]
})
export class DeleteNotificationPageModule {}
