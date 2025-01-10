import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts(1); // Load produk di page 1 misalnya
  }

  loadProducts(page: number) {
    this.productService.getProducts(page).subscribe(
      (response) => {
        console.log('Data produk:', response); // Log data yang didapat dari API
        this.products = response.data; // Asumsikan API mengembalikan data dalam response
      },
      (error) => {
        console.error('Error mengambil produk:', error);
      }
    );
  }
}