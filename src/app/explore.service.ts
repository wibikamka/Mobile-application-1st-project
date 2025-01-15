import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  private apiUrl = environment.backendUrl + 'post';

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
