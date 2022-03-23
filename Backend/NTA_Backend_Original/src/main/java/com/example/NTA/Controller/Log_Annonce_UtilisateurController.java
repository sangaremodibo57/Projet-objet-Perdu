package com.example.NTA.Controller;

import com.example.NTA.Model.Log_Annonce_Utilisateur;
import com.example.NTA.Service.Log_Annonce_UtilisateurServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/nta/api/v1")
public class Log_Annonce_UtilisateurController {
    @Autowired
    Log_Annonce_UtilisateurServiceImp annonce_utilisateurServiceImp;

    @PostMapping("/addLogannonceuser")
    public Log_Annonce_Utilisateur savelogannonceutilisateur(@RequestBody Log_Annonce_Utilisateur annonceUtilisateur) {
        return annonce_utilisateurServiceImp.savelogannonceutilisateur(annonceUtilisateur);
    }

    @PutMapping("/updateLogannonceuser/{id}")
    public Log_Annonce_Utilisateur updatelogannonceutilisateur(@RequestBody Log_Annonce_Utilisateur annonceUtilisateur, @PathVariable Long id) {
        return annonce_utilisateurServiceImp.updatelogannonceutilisateur(annonceUtilisateur, id);
    }

    @GetMapping("/allLogannonceuser")
    public List<Log_Annonce_Utilisateur> getAllannonceutilsateur() {
        return annonce_utilisateurServiceImp.getAllannonceutilsateur();
    }

    @GetMapping("/oneLogannonceuser/{id}")
    public Log_Annonce_Utilisateur getoneannonceutilisateur(@PathVariable Long id) {
        return annonce_utilisateurServiceImp.getoneannonceutilisateur(id);
    }

    @DeleteMapping("/deleteoneLogannonceuser/{id}")
    public void deleteannonceutilisateur(@PathVariable Long id) {
        annonce_utilisateurServiceImp.deleteannonceutilisateur(id);
    }
}
