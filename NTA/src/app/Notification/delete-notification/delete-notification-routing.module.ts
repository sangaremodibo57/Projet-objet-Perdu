import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteNotificationPage } from './delete-notification.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteNotificationPageRoutingModule {}
