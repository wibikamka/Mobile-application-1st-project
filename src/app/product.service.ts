import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Import tap operator untuk melihat respons

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://d3c8-139-195-168-158.ngrok-free.app/api/product'; // Ganti dengan URL backend Anda

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<any> {
    // return this.http.get<any>($this.apiUrl?page=$page);
    let data: Observable<any>;
    data = this.http.get<any>(this.apiUrl);
    // data = ['data'];
    return data;

  }
}
