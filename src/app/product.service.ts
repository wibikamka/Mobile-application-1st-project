// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://d3c8-139-195-168-158.ngrok-free.app/api/product';

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<any> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });

    return this.http.get<any>(`${this.apiUrl}?page=${page}`, { headers });
  }

  // Menambahkan method untuk mengambil produk berdasarkan ID
  getProductById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });

    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }
}
