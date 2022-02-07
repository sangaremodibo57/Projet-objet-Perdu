import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutReclamerPage } from './ajout-reclamer.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutReclamerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutReclamerPageRoutingModule {}
