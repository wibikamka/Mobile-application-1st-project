import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Impor CommonModule
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailexplorPage } from './detailexplor.page';  // Perbaiki nama di sini
import { RouterModule } from '@angular/router'; // Tambahkan RouterModule jika diperlukan

@NgModule({
  imports: [
    CommonModule,  // Pastikan sudah ada di sini
    FormsModule,
    IonicModule,
    RouterModule.forChild([  // Menambahkan routing untuk halaman ini
      {
        path: '',
        component: DetailexplorPage
      }
    ])
  ],
  declarations: [DetailexplorPage]  // Ganti ke DetailexplorPage
})
export class DetailexplorPageModule {}  // Nama modul juga disesuaikan
