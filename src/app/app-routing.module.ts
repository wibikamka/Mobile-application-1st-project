import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductPageModule),
  },
  {
    path: 'bag',
    loadChildren: () => import('./bag/bag.module').then((m) => m.BagPageModule),
    canActivate: [authGuard],
  },
  {
    path: 'detail/:id', // Menambahkan :id sebagai parameter dinamis
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutPageModule),
    canActivate: [authGuard],
  },
  {
    path: 'pesanan-saya',
    loadChildren: () =>
      import('./pesanan-saya/pesanan-saya.module').then(
        (m) => m.PesananSayaPageModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'explorer',
    loadChildren: () =>
      import('./explorer/explorer.module').then((m) => m.ExplorerPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
    canActivate: [authGuard],
  },
  {
    path: 'detailexplor/:id',
    loadChildren: () =>
      import('./detailexplor/detailexplor.module').then(
        (m) => m.DetailexplorPageModule
      ),
  },
  {
    path: 'developer',
    loadChildren: () =>
      import('./developer/developer.module').then((m) => m.DeveloperPageModule),
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./profile-id/profile-id.module').then(
        (m) => m.ProfileIdPageModule
      ),
  },
  {
    path: 'createpost',
    loadChildren: () =>
      import('./createpost/createpost.module').then(
        (m) => m.CreatepostPageModule
      ),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
