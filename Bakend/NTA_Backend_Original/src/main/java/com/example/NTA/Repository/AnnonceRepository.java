package com.example.NTA.Repository;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Annonce;
import com.example.NTA.Model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Transactional
public interface AnnonceRepository extends JpaRepository<Annonce,Long> {
    //Recherche d'annonce par nom, lieu et couleur
    @Query(value = "SELECT an  FROM Annonce an WHERE an.nom = :nom AND an.lieu = :lieu AND an.couleur = :couleur AND an.etat ='active' AND year(an.date) = :date")
    Annonce findAnnonceByNomAndLieuAndCouleurAndDate(@Param("nom") String nom, @Param("lieu") String lieu, @Param("couleur") String couleur, @Param("date") String date);
    //Recherche d'annonce par utilisateur
    @Query(value = "SELECT a FROM Annonce a WHERE a.utilisateur.id = :id")
    List<Annonce> findAnnonceByUtilisateur(@Param("id") Long id);

    // liste Annonce par etat active et perdu
    @Query(value = "SELECT a FROM Annonce  a   WHERE a.etat='active' AND a.statut='perdu' ORDER BY a.date DESC ")
    public List<Annonce> afficheAnnonceActive();

    // liste Annonce par etat active et trouve
    @Query(value = "SELECT a FROM Annonce  a   WHERE a.etat='active' AND a.statut='trouve' ORDER BY a.date DESC ")
    public List<Annonce> afficheAnnonceActiveTrouve();

    //(Corbeille) liste Annonce par etat desactive
    @Query(value = "SELECT user FROM Utilisateur  user WHERE user.etat='desactive'")
    public List<Annonce> afficheAnnonceDesactive();

    //Changer l'etat à active
    @Modifying
    @Query(value = "UPDATE  Annonce SET etat= 'active'  WHERE id= :id  ")
    public void modifieEtatActiveAnnonce (@Param("id") Long id);

    // (Corbeille) Changer l'etat à desactive
   /* @Modifying
    @Query(value = "UPDATE  Annonce SET etat= 'desactive'  WHERE id= :id  ")
    public void modifieEtatDesactiveAnnonce (@Param("id") Long id);*/

    // liste Annonce par statut trouve
    @Query(value = "SELECT an FROM Annonce  an WHERE an.statut='trouve'")
    public List<Annonce> afficheAnnonceTrouve();

    //(Corbeille) liste Annonce par statut perdu
    @Query(value = "SELECT an FROM Annonce  an WHERE an.statut='perdu'")
    public List<Annonce> afficheAnnoncePerdu();

    //Changer statut à Trouve
    @Modifying
    @Query(value = "UPDATE  Annonce SET statut= 'trouve'  WHERE id= :id  ")
    public void modifieStatutTrouveAnnonce (@Param("id") Long id);

    // (Corbeille) Changer Statut à Perdu
    @Modifying
    @Query(value = "UPDATE  Annonce SET statut= 'perdu'  WHERE id= :id  ")
    public void modifieStatutPerduAnnonce (@Param("id") Long id);

    public List<Annonce> getAnnonceByNomAndLieuAndCouleurAndDateGreaterThanEqualAndDateLessThanEqualAndEtatAndStatutAndModelAndAnneeObttionAndNomProprietaireDocAndPrenomProprietaireDocAndDateNaissanceDoc(
            String nom, String lieu, String couleur, LocalDate min, LocalDate max, Etat etat, Statut statut, String model, String anneeObttion, String nomProprietaireDoc, String prenomProprietaireDoc, String dateNaissanceDoc);


}
