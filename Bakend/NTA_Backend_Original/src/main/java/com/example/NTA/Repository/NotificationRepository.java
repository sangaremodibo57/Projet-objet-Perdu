package com.example.NTA.Repository;

import com.example.NTA.Model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    //Recherche notification par Utilisateur
    @Query(value = "SELECT u FROM Notification u WHERE u.reclame.user.id= :id AND u.etat ='active'")
    public List<Notification> findnotificationByUtilisateur(@Param("id") Long id);


    //La liste des notification par etat active
    @Query(value = "SELECT u FROM Notification u WHERE u.etat ='active'")
    public List<Notification> findNotificationByEtatActive();


    //La liste des notification par etat Desactive
    @Query(value = "SELECT u FROM Notification u WHERE u.etat ='desactive'")
    public List<Notification> findNotificationByEtatDesactive();


    //Changer l'etat à active
    @Modifying
    @Query(value = "UPDATE  Notification SET etat= 'active'  WHERE id= :id  ")
    public void modifieEtatActive (@Param("id") Long id);

    //  Changer l'etat à desactive
    @Modifying
    @Query(value = "UPDATE  Notification SET etat= 'desactive'  WHERE id= :id  ")
    public void modifieEtatDesactive (@Param("id") Long id);

    // Changer l'etatNotification de la Notification en vue
    @Modifying
    @Query(value = "UPDATE  Notification SET etatNotification= 'vue'  WHERE id= :id  ")
    public void modifieEtatNotificationEnVue (@Param("id") Long id);

    //  Changer l'etatNotification de la Notification en nonvue
    @Modifying
    @Query(value = "UPDATE  Notification SET etatNotification= 'nonvue'  WHERE id= :id  ")
    public void modifieEtatNotificationEnNonVue (@Param("id") Long id);


}
