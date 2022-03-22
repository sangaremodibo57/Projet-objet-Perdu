package com.example.NTA.Service;

import com.example.NTA.Model.Log_Annonce_Utilisateur;

import java.util.List;

public interface Log_Annonce_UtilisateurService {
    public Log_Annonce_Utilisateur savelogannonceutilisateur(Log_Annonce_Utilisateur annonceUtilisateur);
    public Log_Annonce_Utilisateur updatelogannonceutilisateur(Log_Annonce_Utilisateur annonceUtilisateur, Long id);
    public List<Log_Annonce_Utilisateur> getAllannonceutilsateur();
    public Log_Annonce_Utilisateur getoneannonceutilisateur(Long id);
    public void deleteannonceutilisateur(Long id);
}
