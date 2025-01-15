import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  private apiUrl = 'https://d9d2-103-153-191-213.ngrok-free.app/api/post';

  constructor(private http: HttpClient) {}

  // Mengambil semua post dengan halaman tertentu
  getPosts(page: number): Observable<any> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });

    return this.http.get<any>(`${this.apiUrl}?page=${page}`, { headers });
  }

  // Mengambil post berdasarkan ID
  getPostById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });

    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }
}
