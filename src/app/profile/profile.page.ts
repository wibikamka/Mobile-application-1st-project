import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any = null; // Menyimpan data profil
  errorMessage: string = ''; // Menyimpan pesan kesalahan

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadProfile(); // Memuat data profil saat komponen diinisialisasi
  }

  loadProfile() {
    this.apiService.get('profile').subscribe(
      (response: any) => {
        this.profile = response.data; // Mengambil data dari response JSON
      },
      (error) => {
        console.error('Error fetching profile', error);
        this.errorMessage = 'Failed to load profile.';
      }
    );
  }

  logout() {
    localStorage.removeItem('userToken');
    window.location.href = '/login';
  }
}
