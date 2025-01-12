// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://b370-149-113-30-113.ngrok-free.app/api/product/api/post';  // URL API untuk mendapatkan post
  private token: string = '';    // Simpan token JWT yang didapat setelah login

  constructor(private http: HttpClient) {}

  // Set JWT token
  setToken(token: string) {
    this.token = token;
  }

  // Ambil daftar post dengan pagination
  getPosts(page: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`  // Kirimkan token di header Authorization
    });

    return this.http.get<any>(`${this.apiUrl}?page=${page}`, { headers });
  }
}
