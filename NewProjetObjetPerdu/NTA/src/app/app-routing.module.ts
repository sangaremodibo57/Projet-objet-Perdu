import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-info',
    loadChildren: () => import('./tab-info/tab-info.module').then( m => m.TabInfoPageModule)
  },
  {
    path: 'ajout-annonce',
    loadChildren: () => import('./Annonce/ajout-annonce/ajout-annonce.module').then( m => m.AjoutAnnoncePageModule)
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
    path: '',
    loadChildren: () => import('./Splash/splash-screem/splash-screem.module').then( m => m.SplashScreemPageModule)
  },
  {
    path: 'detail-annonce/:id',
    loadChildren: () => import('./Annonce/detail-annonce/detail-annonce.module').then( m => m.DetailAnnoncePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Notification/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'detail-profil',
    loadChildren: () => import('./UserProfil/detail-profil/detail-profil.module').then( m => m.DetailProfilPageModule)
  },
  {
    path: 'modifier-profil',
    loadChildren: () => import('./UserProfil/modifier-profil/modifier-profil.module').then( m => m.ModifierProfilPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./Forgot/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'update-publication/:id',
    loadChildren: () => import('./UserProfil/update-publication/update-publication.module').then( m => m.UpdatePublicationPageModule)
  },
  {
    path: 'detail-notification/:id',
    loadChildren: () => import('./Notification/detail-notification/detail-notification.module').then( m => m.DetailNotificationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
