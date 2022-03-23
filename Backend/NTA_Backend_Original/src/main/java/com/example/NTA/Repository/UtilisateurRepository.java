package com.example.NTA.Repository;

import com.example.NTA.Model.Admin;
import com.example.NTA.Model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
    //Authentification des utilisateurs
    @Query(value = "SELECT u FROM Utilisateur u WHERE u.email = :email AND u.password = :password AND u.etat ='active'")
    Utilisateur findByEmailAndPassword(@Param("email") String email, @Param("password") String password);


    //Authentification avec tel
    @Query(value = "SELECT ul FROM Utilisateur ul WHERE ul.tel = :tel AND ul.password = :password AND ul.etat ='active'")
    Utilisateur findByTelAndPassword(@Param("tel") Long tel, @Param("password") String password);

    //Authentification des utilisateurs  register par tel
   @Query(value = "SELECT u FROM Utilisateur u WHERE u.tel = :tel OR u.email = :email AND u.etat ='active'")
   Utilisateur selectionUserByTelOrEmailRepository(@Param("tel") Long tel, @Param("email") String email);

    //Afficher utilisateurs qui sont femmes
    @Query(value = "SELECT f FROM Utilisateur f WHERE f.genre= 'femme' ")
    List<Utilisateur> getAlluserFemme();
    //Afficher utilisateurs qui sont hommes
    @Query(value = "SELECT h FROM Utilisateur h WHERE h.genre= 'homme' ")
    List<Utilisateur> getAlluserHomme();
    // liste user par etat active
    @Query(value = "SELECT user FROM Utilisateur  user WHERE user.etat='active'")
    public List<Utilisateur> afficheUserActive();

    //(Corbeille) liste User par etat desactive
    @Query(value = "SELECT user FROM Utilisateur  user WHERE user.etat='desactive'")
    public List<Utilisateur> afficheUserDesactive();

    //Changer l'etat à active
    @Modifying
    @Query(value = "UPDATE  Utilisateur SET etat= 'active'  WHERE id= :id  ")
    public void modifieEtatActiveUser (@Param("id") Long id);

    // (Corbeille) Changer l'etat à desactive
    @Modifying
    @Query(value = "UPDATE  Utilisateur SET etat= 'desactive'  WHERE id= :id  ")
    public void modifieEtatDesactiveUser (@Param("id") Long id);

}
