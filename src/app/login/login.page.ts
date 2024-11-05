import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; // Import Router untuk navigasi
import {TokenService} from '../token.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any = { email: '', password: '' };

  constructor(public api: ApiService, private router: Router, private token:TokenService) { } // Tambahkan Router di constructor

  ngOnInit() { }

  doLogin() {
    this.api.post('login', this.data).subscribe(
      (response: any) => { // Tambahkan tipe `any` pada `response`
        if (response.token) {
          // Simpan token di localStorage
          localStorage.setItem('userToken', response.token);
          console.log("Token disimpan", response.token);
          // Redirect atau aksi lain setelah login
          this.router.navigate(['/home']);
        }
    }, (error) => {
      console.error("login error", error);
      // Tampilkan pesan error ke pengguna (misalnya dengan alert)
      alert("Login failed: " + error.error.message); // Menampilkan pesan kesalahan
    });
  }

  submitlogin() {
    console.log(this.data); // Ubah dari this.form ke this.data
    this.doLogin(); // Panggil fungsi login
  }
}
