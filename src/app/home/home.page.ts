import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  productsFromPost: any[] = []; // Semua produk dari JSON
  post: any = null; // Post khusus untuk baris 1 atau kelipatan 4
  products: any[] = []; // Menyimpan produk
  page = 1; // Menyimpan halaman yang sedang aktif
  loading = false; // Indikator loading
  lastPage = false; // Indikator halaman terakhir

  constructor(
    private productService: ProductService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadPostWithProduct();
    this.loadProducts(); // Load produk ketika halaman di-initialize
  }

  loadProducts(event?: any) {
    // Jika sedang loading, hentikan agar tidak ada request ganda
    if (this.loading || this.lastPage) return;

    this.loading = true; // Mulai proses loading

    // Panggil service untuk mendapatkan produk berdasarkan page
    this.productService.getProducts(this.page).subscribe(
      (response: any) => {
        const data = response.data; // Menyesuaikan dengan format response
        if (data.length === 0) {
          this.lastPage = true; // Set ke true jika tidak ada produk lagi
        } else {
          this.products = [...this.products, ...data]; // Menambahkan produk baru ke array
          this.page++; // Menambah halaman setelah data berhasil dimuat
        }
        this.loading = false; // Selesai proses loading

        // Jika dipanggil dari infinite scroll event, akhiri event setelah loading selesai
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.error('Error loading products', error);
        this.loading = false;
        if (event) {
          event.target.complete();
        }
      }
    );
  }

  loadMore(event: any) {
    // Panggil metode `loadProducts` dan operkan `event` untuk infinite scroll
    this.loadProducts(event);
  }

  loadPostWithProduct() {
    this.apiService.get(`postwithproduct`).subscribe(
      (response: any) => {
        this.post = response.post;
        this.productsFromPost = response.products;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  isSpecialRow(index: number): boolean {
    if ((index + 1) % 7 === 0) {
      // this.loadPostWithProduct();
    }
    return (index + 1) % 7 === 0;
  }
}
