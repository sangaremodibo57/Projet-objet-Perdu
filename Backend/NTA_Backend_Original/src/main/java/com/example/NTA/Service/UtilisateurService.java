package com.example.NTA.Service;

import com.example.NTA.Model.Admin;
import com.example.NTA.Model.Utilisateur;

import java.util.List;

public interface UtilisateurService {
    public Utilisateur saveuser(Utilisateur utilisateur);
    public Utilisateur updateuser(Utilisateur utilisateur, Long id);
    public List<Utilisateur> getalluser();
    public Utilisateur getuserByid(Long id);
    public  void deleteuser(Long id);
    public Utilisateur AuthuserByEmailAndPassword(String email, String password);
    public List<Utilisateur> getalluserBygenreFemme();

    public List<Utilisateur> getalluserBygenreHomme();

    //Verification tel ou email au moment de l ajout

    public  Utilisateur afficheUserbyTelOuEmailService(Long tel, String email);

    public  List<Utilisateur> listeactiveUser();
    public  List<Utilisateur> listedesactiveUser();
    public  void modifieractiveUser(Long id);
    public  void modifierdesactiveUser(Long id);



   public Utilisateur LoginuserByTelAndPassword(Long tel, String password);
}
