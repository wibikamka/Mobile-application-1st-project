import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data.data; // Pastikan Anda mengambil data dari response yang benar
        console.log('Product data received:', this.product);
      });
    }
  }

  addToBag() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ ...this.product, selected: false }); // Menambahkan produk ke dalam keranjang
    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigate(['/bag']); // Mengarahkan ke halaman keranjang
  }

  calculateAverageRating(reviews: any[]): number {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  }
  getStars(rating: number): any[] {
    return new Array(Math.floor(rating)); // Membuat array sebanyak rating bintang
  }

  // Fungsi untuk mengubah ukuran gambar ketika diklik
  toggleImageSize(review: any) {
    review.isLargeImage = !review.isLargeImage;
  }

  goBack() {
    this.navCtrl.back();
  }
}
