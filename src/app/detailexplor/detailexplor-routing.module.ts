import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailexplorPage } from './detailexplor.page';

const routes: Routes = [
  {
    path: '',
    component: DetailexplorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailexplorPageRoutingModule {}
