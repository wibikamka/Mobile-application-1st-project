import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileIdPage } from './profile-id.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileIdPageRoutingModule {}
