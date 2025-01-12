import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  products: any[] = [];
  page: number = 1;
  loading = false;
  lastPage = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(event?: any) {
    if (this.loading || this.lastPage) return;

    this.loading = true; 

    this.productService.getProducts(this.page).subscribe(
      (response: any) => {
        const data = response.data; 
        if (data.length === 0) {
          this.lastPage = true; 
        } else {
          this.products = [...this.products, ...data]; 
        }
        this.loading = false; 

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
    if (this.lastPage) return; 

    this.page++; 
    this.loadProducts(event); 
  }
}
