import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Register/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./Forgot/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'perdu',
    loadChildren: () => import('./Objet Perdu/perdu/perdu.module').then( m => m.PerduPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Notification/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'trouve',
    loadChildren: () => import('./Objet Trouve/trouve/trouve.module').then( m => m.TrouvePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./Info Utile/info/info.module').then( m => m.InfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
