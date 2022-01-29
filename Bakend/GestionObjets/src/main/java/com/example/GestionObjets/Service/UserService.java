package com.example.GestionObjets.Service;

import com.example.GestionObjets.Model.User;

import java.util.List;

public interface UserService {
    //methode d'ajout
    public User ajoutUser(User user);
    //liste des Admin
    public List<User> listeAdmin();
    //Afficher un Admin
    public User afficheAdmin(Long Id);
    //Modifier un Admin
    public User modifierAdminById(User user, Long Id);
    //Supprimer un Admin
    public void suppAdminById(Long Id);
}
