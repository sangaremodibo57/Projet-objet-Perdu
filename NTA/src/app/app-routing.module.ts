import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./SplashScreen/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./Auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./Profil/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./Profil/edit/edit.module').then( m => m.EditPageModule)
  },  {
    path: 'add-notification',
    loadChildren: () => import('./Notification/add-notification/add-notification.module').then( m => m.AddNotificationPageModule)
  },
  {
    path: 'liste-notification',
    loadChildren: () => import('./Notification/liste-notification/liste-notification.module').then( m => m.ListeNotificationPageModule)
  },
  {
    path: 'delete-notification',
    loadChildren: () => import('./Notification/delete-notification/delete-notification.module').then( m => m.DeleteNotificationPageModule)
  },
  {
    path: 'ajout-perdu',
    loadChildren: () => import('./Perdu/ajout-perdu/ajout-perdu.module').then( m => m.AjoutPerduPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
