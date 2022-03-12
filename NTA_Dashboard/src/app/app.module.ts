import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularConfirmModalModule } from 'angular-confirm-modal';
import { AjoutAdminComponent } from './GestionAdmin/ajout-admin/ajout-admin.component';
import { ListeAdminComponent } from './GestionAdmin/liste-admin/liste-admin.component';
import { DetailsAdminComponent } from './GestionAdmin/details-admin/details-admin.component';
import { UpdateAdminComponent } from './GestionAdmin/update-admin/update-admin.component';
import { AjoutUserComponent } from './GestionUser/ajout-user/ajout-user.component';
import { ListeUserComponent } from './GestionUser/liste-user/liste-user.component';
import { UpdateUserComponent } from './GestionUser/update-user/update-user.component';
import { DetailUserComponent } from './GestionUser/detail-user/detail-user.component';
import { LoginComponent } from './Login/login/login/login.component';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { AjoutobjetperduComponent } from './Objets_Perdu/ajoutobjetperdu/ajoutobjetperdu.component';
import { ListeobjetperduComponent } from './Objets_Perdu/listeobjetperdu/listeobjetperdu.component';
import { AjoutobjettrouveComponent } from './Objets_Trouves/ajoutobjettrouve/ajoutobjettrouve.component';
import { ListeobjettrouveComponent } from './Objets_Trouves/listeobjettrouve/listeobjettrouve.component';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SwiperModule } from "swiper/angular";
import {NgxPaginationModule} from 'ngx-pagination';
import { PopoverModule } from 'ngx-smart-popover';
import { ReclamerComponent } from './Reclamer/reclamer/reclamer.component';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';

import {MatPaginatorModule} from '@angular/material/paginator';
import { AjoutCategorieComponent } from './Categorie_Objet/Categorie/ajout-categorie/ajout-categorie.component';
import { ListCategorieComponent } from './Categorie_Objet/Categorie/list-categorie/list-categorie.component';
import { CorbeilleComponent } from './CorbPOP/corbeille/corbeille.component';
import { ListeAdminInactiveComponent } from './CorbAdmin/liste-admin-inactive/liste-admin-inactive.component';
import { ListeUserInactiveComponent } from './CorbUser/liste-user-inactive/liste-user-inactive.component';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import { RouterModule } from '@angular/router';
import { HeadercorbeilleComponent } from './headercorbeille/headercorbeille.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    AjoutAdminComponent,
    ListeAdminComponent,
    DetailsAdminComponent,
    UpdateAdminComponent,
    AjoutUserComponent,
    ListeUserComponent,
    UpdateUserComponent,
    DetailUserComponent,
    LoginComponent,
    AccueilComponent,
    AjoutobjetperduComponent,
    ListeobjetperduComponent,
    AjoutobjettrouveComponent,
    ListeobjettrouveComponent,
    ReclamerComponent,
    AjoutCategorieComponent,
    ListCategorieComponent,
    CorbeilleComponent,
    ListeAdminInactiveComponent,
    ListeUserInactiveComponent,
    HeadercorbeilleComponent
   
  ],
  imports: [
    MatPaginatorModule,
    AccordionModule,
    DropdownModule,
    PopoverModule,
    NgxPaginationModule,
    SwiperModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TabViewModule,
    PanelModule,
    AngularConfirmModalModule.forRoot({
      //optional global config
   
      //confirmBtnClass: 'btn btn-success',
      //confirmBtnText: 'Confirm',
      //cancelBtnClass: 'btn btn-danger',
      //cancelBtnText: 'Cancel',
      //modalSize: 'lg',
      //modalClass: 'some-modal-class'
     })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
