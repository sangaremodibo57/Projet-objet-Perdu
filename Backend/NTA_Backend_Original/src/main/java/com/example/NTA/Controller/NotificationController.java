package com.example.NTA.Controller;

import com.example.NTA.Model.Notification;
import com.example.NTA.Service.NotificationServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/nta/api/v1")
public class NotificationController {
    @Autowired
    NotificationServiceImp notficatservimp;

    //Ajout notification
    @PostMapping("/addnotification")
    public Notification addnotification(@RequestBody Notification notification) {
        return notficatservimp.addnotification(notification);
    }
    //Modification Notification
    @PutMapping("/updatenotification/{id}")
    public Notification updatenotification(@RequestBody Notification notification, @PathVariable Long id) {
        return notficatservimp.updatenotification(notification, id);
    }

    //Liste globale des notifications
    @GetMapping("/allnotification")
    public List<Notification> getallnotification() {
        return notficatservimp.getallnotification();
    }

    //Notification par id
    @GetMapping("/getnotificationByid/{id}")
    public Notification getnotificationByid(@PathVariable Long id) {
        return notficatservimp.getnotificationByid(id);
    }

    //Supprimer Notification par id
    @DeleteMapping("/deletenotification/{id}")
    public void deletenotification(@PathVariable Long id) {
        notficatservimp.deletenotification(id);
    }
    //Afficher Notification par Utilisateur
    @GetMapping("/notificationByUser/{id}")
    public List<Notification> getnotificationByUser(@PathVariable Long id) {
        return notficatservimp.getnotificationByUser(id);
    }

    @PutMapping("/updateEtatByActive/{id}")
    public void modifieractive(@PathVariable Long id) {
        notficatservimp.updateNotificationByEtatActive(id);

    }

    @PutMapping("/updateEtatByDesactive/{id}")
    public void modifierdesactive(@PathVariable Long id) {
        notficatservimp.updateNotificationByEtatDesactive(id);

    }

    @PutMapping("/updateEtatNotificationByVue/{id}")
    public void modifierVue(@PathVariable Long id) {
        notficatservimp.updateEtatNotificationByVue(id);

    }

    @PutMapping("/updateEtatNotificationByNonVue/{id}")
    public void modifierNonVue(@PathVariable Long id) {
        notficatservimp.updateEtatNotificationByNonVue(id);

    }


    @GetMapping("/afficheListeByEtatActive")
    public List<Notification> getNotificationByEtatActive() {
        return notficatservimp.getNotificationByEtatActive();
    }

    @GetMapping("/afficheListeByEtatDesactive")
    public List<Notification> getNotificationByEtatDesactive() {
        return notficatservimp.getNotificationByEtatDesactive();
    }
}
