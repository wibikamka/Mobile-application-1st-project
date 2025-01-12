import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController untuk navigasi

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  selectedProducts: any[] = [];
  totalPrice: number = 0;

  paymentMethods = [
    { id: 'bank_transfer', name: 'Transfer Bank' },
    { id: 'credit_card', name: 'Kartu Kredit' },
    { id: 'e_wallet', name: 'E-Wallet' },
  ];
  shippingOptions = [
    { id: 'jne', name: 'JNE', cost: 30000 },
    { id: 'pos', name: 'POS Indonesia', cost: 20000 },
    { id: 'grab', name: 'Grab Express', cost: 35000 },
  ];

  selectedPaymentMethod: string = '';
  selectedShippingOption: any = null;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const storedItems = localStorage.getItem('checkoutItems');
    this.selectedProducts = storedItems ? JSON.parse(storedItems) : [];
    this.totalPrice = this.selectedProducts.reduce(
      (acc, item) => acc + (item.price || 0),
      0
    );
  }

  calculateFinalTotal() {
    const shippingCost = this.selectedShippingOption?.cost || 0;
    return this.totalPrice + shippingCost;
  }

  proceedToPayment() {
    if (!this.selectedPaymentMethod || !this.selectedShippingOption) {
      alert('Silakan pilih metode pembayaran dan jasa pengiriman!');
      return;
    }

    const orderDetails = {
      products: this.selectedProducts,
      paymentMethod: this.selectedPaymentMethod,
      shippingOption: this.selectedShippingOption,
      total: this.calculateFinalTotal(),
    };

    console.log('Proses ke pembayaran dengan detail:', orderDetails);
    alert('Pesanan Anda diproses!');
  }

  goBack() {
    this.navCtrl.navigateBack('/bag'); // Navigasi kembali ke halaman bag
  }
}
