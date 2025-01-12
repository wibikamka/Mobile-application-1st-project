import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.page.html',
  styleUrls: ['./bag.page.scss'],
})
export class BagPage implements OnInit {
  cart: any[] = [];
  subtotal: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  // Memuat produk dari localStorage
  loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.calculateSubtotal();
  }

  // Menghitung subtotal berdasarkan produk yang dipilih
  calculateSubtotal() {
    this.subtotal = this.cart
      .filter(item => item.selected) // Hanya yang dipilih yang dihitung
      .reduce((acc, item) => acc + item.price, 0);
  }

  // Mengupdate status produk yang dipilih
  onSelectionChange() {
    this.calculateSubtotal();
  }

  // Proses pembayaran produk yang dipilih
  proceedToPayment() {
    const selectedItems = this.cart.filter(item => item.selected);
    if (selectedItems.length === 0) {
      alert('Pilih setidaknya satu produk untuk melanjutkan ke pembayaran.');
      return;
    }

    // Simpan produk yang dipilih ke localStorage
    localStorage.setItem('checkoutItems', JSON.stringify(selectedItems));

    // Arahkan ke halaman checkout
    this.router.navigate(['/checkout']);
  }

  // Menghapus item dari keranjang
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.calculateSubtotal();
  }
}
