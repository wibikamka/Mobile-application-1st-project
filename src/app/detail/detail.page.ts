import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';  // Impor Router

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
    private router: Router // Suntikkan Router ke dalam konstruktor
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
}
