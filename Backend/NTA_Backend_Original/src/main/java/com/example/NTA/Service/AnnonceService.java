package com.example.NTA.Service;

import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Admin;
import com.example.NTA.Model.Annonce;

import java.sql.Date;
import java.util.List;

public interface AnnonceService {
    public Annonce saveannonce(Annonce annonce);
    public Annonce updateannonce(Annonce annonce, Long id);
    public List<Annonce> getallannonce();
    public Annonce getannonceByid(Long id);
    public void deleteannonceByid(Long id);
    public  Annonce getannonceByNomLieuCouleur(String nom, String lieu, String couleur, String date);
    public  List<Annonce> getAnnonceByUtilisateur(Long id);

    public  List<Annonce> listeannonceactive();


    // liste annonce etat= active et statut= trouve
    public  List<Annonce> listeAnnonceActiveTrouve();


    public  List<Annonce> listeannoncedesactive();
    public  void modifierannonceactive(Long id);
    public  void modifierannoncedesactive(Long id);

    public  List<Annonce> listeannonceTrouve();
    public  List<Annonce> listeannoncePerdu();
    public  void modifierannonceTrouve(Long id);
    public  void modifierannoncePerdu(Long id);
    public List<Annonce> getSpecifiqueAnnonce(String nom, String lieu, String couleur, int date, Statut statut, String model, String anneeObttion,String nomProprietaireDoc, String prenomProprietaireDoc, String dateNaissanceDoc);

}
