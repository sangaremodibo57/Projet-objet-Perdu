package com.example.NTA.Repository;

import com.example.NTA.Model.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    //Afficher la liste globale des catégories à l'etat active
    @Query(value = "SELECT c FROM Categorie  c WHERE c.etat='active'")
    public List<Categorie> getCatgeorieActive();

    //Afficher la liste globale des catégories à l'etat desactive(Corbeille)
    @Query(value = "SELECT ca FROM Categorie  ca WHERE ca.etat='desactive'")
    public List<Categorie> getCatgeorieDesactive();

    //Changer l'etat de la catégorie à active
    @Modifying
    @Query(value = "UPDATE  Categorie SET etat= 'active'  WHERE id= :id  ")
    public void changeCategorieEtatActive (@Param("id") Long id);

    //Changer l'etat de la catégorie à desactive
    @Modifying
    @Query(value = "UPDATE  Categorie SET etat= 'desactive'  WHERE id= :id  ")
    public void changeCategorieEtatDesactive (@Param("id") Long id);

}
