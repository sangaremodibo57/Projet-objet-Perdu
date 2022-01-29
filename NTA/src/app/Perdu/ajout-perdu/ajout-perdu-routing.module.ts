import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutPerduPage } from './ajout-perdu.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutPerduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutPerduPageRoutingModule {}
