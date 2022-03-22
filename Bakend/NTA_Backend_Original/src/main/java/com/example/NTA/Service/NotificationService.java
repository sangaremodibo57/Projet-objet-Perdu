package com.example.NTA.Service;

import com.example.NTA.Model.Notification;

import java.util.List;

public interface NotificationService {
    public Notification addnotification(Notification notification);
    public  Notification updatenotification(Notification notification, Long id);
    public List<Notification> getallnotification();
    public Notification getnotificationByid(Long id);
    public  void  deletenotification(Long id);
    public  List<Notification> getnotificationByUser(Long id);
    public  void updateNotificationByEtatActive(Long id);
    public  void updateNotificationByEtatDesactive(Long id);

    public  void updateEtatNotificationByVue(Long id);
    public  void updateEtatNotificationByNonVue(Long id);

    public  List<Notification> getNotificationByEtatActive();
    public  List<Notification> getNotificationByEtatDesactive();
}
