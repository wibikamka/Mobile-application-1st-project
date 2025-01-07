import { Component } from '@angular/core';

@Component({
  selector: 'app-pesanan-saya',
  templateUrl: './pesanan-saya.page.html',
  styleUrls: ['./pesanan-saya.page.scss'],
})
export class PesananSayaPage {
  currentTab: string = 'menunggu-konfirmasi'; // Default tab

  // Dummy data for each tab
  menungguKonfirmasi = [
    {
      invoice: 'IN/20190103/XIX/I/1234568',
      date: '03 Januari 2019',
      status: 'Pembayaran sudah diverifikasi',
      image: 'assets/img/sample1.jpg',
    },
    {
      invoice: 'IN/20190103/XIX/I/1234569',
      date: '03 Januari 2019',
      status: 'Pembayaran sudah diverifikasi',
      image: 'assets/img/sample2.jpg',
    },
  ];

  pesananDiproses = [
    {
      invoice: 'IN/20190103/XIX/I/9876543',
      date: '04 Januari 2019',
      status: 'Pesanan sedang diproses',
      image: 'assets/img/sample3.jpg',
    },
  ];

  sedangDikirim = [
    {
      invoice: 'IN/20190103/XIX/I/8765432',
      date: '05 Januari 2019',
      status: 'Pesanan sedang dikirim',
      image: 'assets/img/sample4.jpg',
    },
  ];

  constructor() {}
}
