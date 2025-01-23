import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../explore.service'; // Pastikan path ini benar

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  posts: any[] = []; // Ganti 'products' menjadi 'posts'
  page = 1; // Variabel untuk menyimpan halaman saat ini
  loading = false;
  lastPage = false;

  constructor(private exploreService: ExploreService) {}

  ngOnInit() {
    this.loadPost(); // Panggil loadPost saat halaman pertama kali dimuat
  }

  loadPost(event?: any) {
    // Jika sedang loading, hentikan agar tidak ada request ganda
    if (this.loading || this.lastPage) return;

    this.loading = true; // Mulai proses loading

    // Panggil service untuk mendapatkan produk berdasarkan page
    this.exploreService.getPosts(this.page).subscribe(
      (response: any) => {
        const data = response.data; // Menyesuaikan dengan format response
        if (data.length === 0) {
          // this.lastPage = true; // Set ke true jika tidak ada produk lagi
          this.page = 1;
        } else {
          this.posts = [...this.posts, ...data]; // Menambahkan produk baru ke array
          this.page++; // Menambah halaman setelah data berhasil dimuat
        }
        this.loading = false; // Selesai proses loading

        // Jika dipanggil dari infinite scroll event, akhiri event setelah loading selesai
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.error('Error loading posts', error);
        this.loading = false;
        if (event) {
          event.target.complete();
        }
      }
    );
  }

  loadMore(event: any) {
    // Panggil metode `loadPost` dan operkan `event` untuk infinite scroll
    this.loadPost(event);
  }
}
