import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesananSayaPage } from './pesanan-saya.page';

const routes: Routes = [
  {
    path: '',
    component: PesananSayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesananSayaPageRoutingModule {}
