package com.example.NTA.Repository;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Annonce;
import com.example.NTA.Model.Categorie;
import com.example.NTA.Model.Reclamation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ReclamationRepository extends JpaRepository <Reclamation, Long> {

    //Recherche d'annonce par nom, lieu et couleur
    @Query(value = "SELECT r FROM Reclamation r WHERE r.nom = :nom AND r.statut = 'nonvalide' AND r.couleur = :couleur AND r.etat ='active' AND r.nomC = :nomC" )
    Reclamation findReclamationByNomNomCCouleur(@Param("nom") String nom, @Param("nomC") String nomC, @Param("couleur") String couleur);



    //Afficher la liste par etat active et novalide
    @Query(value = "SELECT r FROM Reclamation  r WHERE r.etat='active' AND r.statut='nonvalide'")
    public List<Reclamation> afficheReclamationActiveNovalide();

    //(Corbeille) Afficher la liste par etat desactive et valide
    @Query(value = "SELECT r FROM Reclamation  r WHERE r.etat='desactive' AND r.statut='valide'")
    public List<Reclamation> afficheReclamationdesactivevalide();

    //Changer l'etat à active
    @Modifying
    @Query(value = "UPDATE  Reclamation SET etat= 'active'  WHERE id= :id  ")
    public void modifieEtatActive (@Param("id") Long id);

    //Changer l'etat de active en desactive
   /* @Modifying
    @Query(value = "UPDATE  Reclamation SET etat='desactive' WHERE id= :id  ")
    public void modifieEtatDesactive (@Param("id") Long id);*/




    // new verification Reclamation
    public List<Reclamation> getReclamationByNomAndLieuAndCouleurAndDateGreaterThanEqualAndDateLessThanEqualAndEtatAndStatutAndModelAndAnneeObttionAndNomProprietaireDocAndPrenomProprietaireDocAndDateNaissanceDoc(
            String nom, String lieu, String couleur, LocalDate min, LocalDate max, Etat etat, Statut statut, String model, String anneeObttion, String nomProprietaireDoc, String prenomProprietaireDoc, String dateNaissanceDoc);

}
