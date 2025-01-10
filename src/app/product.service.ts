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
    const headers = new HttpHeaders({ 'Accept': 'application/json' }); // Header untuk menerima JSON
    return this.http.get<any>(`${this.apiUrl}?page=${page}`, { headers }) // Gunakan backtick untuk URL
      .pipe(
        tap(response => console.log('Response:', response))  // Tampilkan response ke console
      );
  }
}
