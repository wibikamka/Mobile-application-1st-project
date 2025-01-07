import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananSayaPageRoutingModule } from './pesanan-saya-routing.module';

import { PesananSayaPage } from './pesanan-saya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananSayaPageRoutingModule
  ],
  declarations: [PesananSayaPage]
})
export class PesananSayaPageModule {}
