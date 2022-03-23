import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { AjoutAdminComponent } from './GestionAdmin/ajout-admin/ajout-admin.component';
import { DetailsAdminComponent } from './GestionAdmin/details-admin/details-admin.component';
import { ListeAdminComponent } from './GestionAdmin/liste-admin/liste-admin.component';
import { UpdateAdminComponent } from './GestionAdmin/update-admin/update-admin.component';
import { AjoutUserComponent } from './GestionUser/ajout-user/ajout-user.component';
import { DetailUserComponent } from './GestionUser/detail-user/detail-user.component';
import { ListeUserComponent } from './GestionUser/liste-user/liste-user.component';
import { UpdateUserComponent } from './GestionUser/update-user/update-user.component';
import { LoginComponent } from './Login/login/login/login.component';
import { AjoutobjetperduComponent } from './Objets_Perdu/ajoutobjetperdu/ajoutobjetperdu.component';
import { ListeobjetperduComponent } from './Objets_Perdu/listeobjetperdu/listeobjetperdu.component';
import { AjoutobjettrouveComponent } from './Objets_Trouves/ajoutobjettrouve/ajoutobjettrouve.component';
import { ListeobjettrouveComponent } from './Objets_Trouves/listeobjettrouve/listeobjettrouve.component';
import { ReclamerComponent } from './Reclamer/reclamer/reclamer.component';
import { AjoutCategorieComponent } from './Categorie_Objet/Categorie/ajout-categorie/ajout-categorie.component';
import { ListCategorieComponent } from './Categorie_Objet/Categorie/list-categorie/list-categorie.component';
import { CorbeilleComponent } from './CorbPOP/corbeille/corbeille.component';
import { ListeAdminInactiveComponent } from './CorbAdmin/liste-admin-inactive/liste-admin-inactive.component';
import { ListeUserInactiveComponent } from './CorbUser/liste-user-inactive/liste-user-inactive.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'accueil', component:AccueilComponent},

  //Gestion Administrateuteurs
  {path:'listeadmin', component:ListeAdminComponent},
  {path:'ajoutadmin', component:AjoutAdminComponent},
  {path:'modifieadmin/:id', component:UpdateAdminComponent},
  {path:'detailadmin/:id', component:DetailsAdminComponent},

  //Gestion Utilisateurs
  {path:'listeuser', component:ListeUserComponent},
  {path:'ajoutuser', component:AjoutUserComponent},
  {path:'modifieuser/:id', component:UpdateUserComponent},
  {path:'detailuser/:id', component:DetailUserComponent},
  
  //Gestion des Objets Perdu
  {path:'listeobjper', component:ListeobjetperduComponent},
  {path:'addobjperd', component:AjoutobjetperduComponent},

  //Gestion des Objets Trouvés
  {path:'listeobjtrouv', component:ListeobjettrouveComponent},
  {path:'addobjtrouv', component:AjoutobjettrouveComponent},

  {path:'reclame', component:ReclamerComponent},

  // Gestion Categorie
  {path:'ajoutCategorie', component:AjoutCategorieComponent},
  {path:'listCategorie', component:ListCategorieComponent},


   // Gestion Corbeilles
   {path:'corbeille', component:CorbeilleComponent},
   {path:'corbeilleadmin', component:ListeAdminInactiveComponent},
   {path:'corbeilleuser', component:ListeUserInactiveComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
