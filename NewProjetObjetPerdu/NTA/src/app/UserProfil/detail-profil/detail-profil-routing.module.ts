import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProfilPage } from './detail-profil.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProfilPageRoutingModule {}
