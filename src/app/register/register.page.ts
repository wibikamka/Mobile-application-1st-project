import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // Objek data untuk pendaftaran
  data: any = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {}

  // Fungsi pendaftaran
  submitregister() {
    // Validasi di client-side (sebelum mengirim ke server)
    if (this.data.password !== this.data.password_confirmation) {
      console.error("Passwords do not match!");
      return;
    }

    if (!this.data.email.endsWith('@gmail.com')) {
      console.error("Email must be a Gmail address (ending with @gmail.com)!");
      return;
    }

    // Mengirim data ke API Laravel
    this.api.post('register', this.data).subscribe(
      (resp) => {
        console.log("register success", resp);
        this.router.navigate(['/login']); 
      },
      (error) => {
        console.error("register error", error);
      }
    );
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
