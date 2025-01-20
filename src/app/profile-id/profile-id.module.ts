import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileIdPageRoutingModule } from './profile-id-routing.module';

import { ProfileIdPage } from './profile-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileIdPageRoutingModule
  ],
  declarations: [ProfileIdPage]
})
export class ProfileIdPageModule {}
