import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Impor CommonModule
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailexplorPage } from './detailexplor.page';  // Perbaiki nama di sini

@NgModule({
  imports: [
    CommonModule, // Pastikan sudah ada di sini
    FormsModule,
    IonicModule
  ],
  declarations: [DetailexplorPage]  // Ganti ke DetailexplorPage
})
export class DetailexplorPageModule {}  // Nama modul juga disesuaikan
