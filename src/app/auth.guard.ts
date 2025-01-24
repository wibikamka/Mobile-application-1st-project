import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('userToken'); // Cek token di localStorage
  const router = inject(Router); // Inject Router untuk navigasi

  if (token) {
    return true; // Izinkan akses
  } else {
    router.navigate(['/login']); // Redirect ke login jika belum login
    return false; // Blokir akses
  }
};
