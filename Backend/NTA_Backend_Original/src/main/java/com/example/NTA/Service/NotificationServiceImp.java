package com.example.NTA.Service;

import com.example.NTA.Model.Notification;
import com.example.NTA.Repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationServiceImp  implements  NotificationService{
    @Autowired
    NotificationRepository notificationRepository;
    @Override
    public Notification addnotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public Notification updatenotification(Notification notification, Long id) {
        Notification notificat = notificationRepository.findById(id).get();
        notificat.setDescription(notification.getDescription());
        notificat.setEtat(notification.getEtat());
        return notificationRepository.save(notificat);
    }

    @Override
    public List<Notification> getallnotification() {
        return notificationRepository.findAll();
    }

    @Override
    public Notification getnotificationByid(Long id) {
        return notificationRepository.findById(id).get();
    }

    @Override
    public void deletenotification(Long id) {notificationRepository.deleteById(id);
    }

    @Override
    public List<Notification> getnotificationByUser(Long id) {return notificationRepository.findnotificationByUtilisateur(id);
    }

    @Override
    public void updateNotificationByEtatActive(Long id) {
        notificationRepository.modifieEtatActive(id);
    }

    @Override
    public void updateNotificationByEtatDesactive(Long id) {
        notificationRepository.modifieEtatDesactive(id);
    }

    @Override
    public void updateEtatNotificationByVue(Long id) {
        notificationRepository.modifieEtatNotificationEnVue(id);
    }

    @Override
    public void updateEtatNotificationByNonVue(Long id) {
        notificationRepository.modifieEtatNotificationEnNonVue(id);
    }

    @Override
    public List<Notification> getNotificationByEtatActive() {
        return notificationRepository.findNotificationByEtatActive();
    }

    @Override
    public List<Notification> getNotificationByEtatDesactive() {
        return notificationRepository.findNotificationByEtatDesactive();
    }


}
