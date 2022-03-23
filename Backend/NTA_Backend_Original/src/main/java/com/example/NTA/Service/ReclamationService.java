package com.example.NTA.Service;

import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Annonce;
import com.example.NTA.Model.Categorie;
import com.example.NTA.Model.Reclamation;

import java.util.List;

public interface ReclamationService {
    public Reclamation addreclamation(Reclamation reclamation);
    public  Reclamation updatereclamation(Reclamation reclamation, Long id);
    public List<Reclamation> getallreclamation();
    public  Reclamation getonereclamation(Long id);
    public void  deletereclamation(Long id);


    public  List<Reclamation> getReclamationByEtatActive();
    public  List<Reclamation> getReclamationByEtatDesactive();
    public  void putReclamationActive(Long id);
    public  void putReclamationDesactive(Long id);
    // Changer l'etat en desactive
    public  void putReclamationEtatDesactive(Long id);

    public Reclamation getReclamationByNomNomCCouleur(String nom, String nomC, String couleur);

    public List<Reclamation> getSpecifiqueReclamation(String nom, String lieu, String couleur, int date, Statut statut, String model, String anneeObttion,String nomProprietaireDoc, String prenomProprietaireDoc, String dateNaissanceDoc);

}
