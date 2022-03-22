package com.example.NTA.Repository;

import com.example.NTA.Model.Objet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ObjetRepository extends JpaRepository<Objet, Long> {

    //La liste globale des objets à l'état active
    @Query(value = "SELECT obja FROM Objet obja WHERE obja.etat = 'active' ")
    public List<Objet> getAllobjetActive();

    //La liste globale des objets à l'état desactive
    @Query(value = "SELECT objd FROM Objet objd WHERE objd.etat = 'desactive' ")
    public  List<Objet> getAllobjetDesactive();

    //Changer l'etat de l'objet à l'etat active
    @Modifying
    @Query(value = "UPDATE  Objet SET etat= 'active'  WHERE id= :id  ")
    public void putObjetEtatActive (@Param("id") Long id);

    //Changer l'etat de l'objet à l'etat desactive
    @Modifying
    @Query(value = "UPDATE  Objet SET etat= 'desactive'  WHERE id= :id  ")
    public void putObjetEtatDesactive (@Param("id") Long id);


}
