package com.example.NTA.Repository;

import com.example.NTA.Model.Admin;
import com.example.NTA.Model.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    //Authentification des Administrateurs
    @Query(value = "SELECT a FROM Admin a WHERE a.email = :email AND a.password = :password")
    Admin findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

    // liste Admin par etat active
    @Query(value = "SELECT adm FROM Admin  adm WHERE adm.etat='active'")
    public List<Admin> afficheAdminActive();

    //(Corbeille) liste Admin par etat desactive
    @Query(value = "SELECT adm FROM Admin  adm WHERE adm.etat='desactive'")
    public List<Admin> afficheAdminDesactive();

    //Changer l'etat à active
    @Modifying
    @Query(value = "UPDATE  Admin SET etat= 'active'  WHERE id= :id  ")
    public void modifieEtatActive (@Param("id") Long id);

    // (Corbeille) Changer l'etat à desactive
    @Modifying
    @Query(value = "UPDATE  Admin SET etat= 'desactive'  WHERE id= :id  ")
    public void modifieEtatDesactive (@Param("id") Long id);


}
