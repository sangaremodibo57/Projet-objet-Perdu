package com.example.NTA.Controller;

import com.example.NTA.Model.Utilisateur;
import com.example.NTA.Service.UtilisateurServiceImp;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/nta/api/v1")
@Api("/nta/api/v1")
public class UtlisateurControlller {
    @Autowired
    UtilisateurServiceImp userserviceImp;

    //Ajout d'un utlisateur
    @PostMapping("/saveuser")
    @ApiOperation(value = "Enregistrer un utilisateur", notes = "cette methode permet d'ajouter un utilisateur", response = Utilisateur.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet utilisateur cree"),
            @ApiResponse(code = 400, message = "l'objet utilisateur n'est pas valide") })
    public Utilisateur saveuser(@RequestBody Utilisateur utilisateur) {
        return userserviceImp.saveuser(utilisateur);
    }
    //Modification des informations d'un utilisateur
    @PutMapping("/updateuser/{id}")
    @ApiOperation(value = "Modifier un utilisateur", notes = "cette methode permet de modifier un utilisateur", response = Utilisateur.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet utilisateur modifié"),
            @ApiResponse(code = 400, message = "l'objet utilisateur n'est pas valide") })
    public Utilisateur updateuser(@RequestBody Utilisateur utilisateur, @PathVariable Long id) {
        return userserviceImp.updateuser(utilisateur, id);
    }
//Affichage de tous les utilisateurs
    @GetMapping("/alluser")
    @ApiOperation(value = "renvoi la liste des utilisateurs", notes = "cette methode permet de chercher et renvoyer la liste des utilisateurs qui existent"
            + "dans la BDD", responseContainer = "list<Utilisateur>")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "la liste des utilisateur / une liste vide") })
    public List<Utilisateur> getalluser() {
        return userserviceImp.getalluser();
    }

//Affichage de l'utilisateur par son id
    @GetMapping("userByid/{id}")
    @ApiOperation(value = "rechercher un utilisateur", notes = "cette methode permet de rechercher un utilisateur par son id", response = Utilisateur.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "utilisateur trouvé dans la BDD"),
            @ApiResponse(code = 404, message = "aucun utilisateur avec cet id n'existe dans la BDD") })
    public Utilisateur getuserByid(@PathVariable Long id) {
        return userserviceImp.getuserByid(id);
    }

//Sppression d'un utilisateur par son id
    @DeleteMapping("/deleteuser/{id}")
    @ApiOperation(value = "supprimer un utilisateur", notes = "cette methode permet de supprimer un utilisateur par son id", response = Utilisateur.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "utilisateur supprimé avec succès dans la BDD"),
            @ApiResponse(code = 404, message = "aucun utilisateur avec cet id n'existe dans la BDD") })
    public void deleteuser(@PathVariable Long id) {
        userserviceImp.deleteuser(id);
    }

    //Authentification des utilisateurs
    @GetMapping(path = "/auth")
    @ApiOperation(value = "créer une authenfication", notes = "cette methode permet à l'utilisateur de s'authentifier")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Authentification réussie"),
            @ApiResponse(code = 400, message = "Authentification non réussie") })
    public Utilisateur AuthuserByEmailAndPassword(@RequestParam String email, @RequestParam String password) {
        return userserviceImp.AuthuserByEmailAndPassword(email, password);
    }
    //Afficher les Utilisateurs Femmes
    @GetMapping("/userfemme")
    @ApiOperation(value = "renvoi la liste des  Utilisateurs Femmes", notes = "cette methode permet de chercher et renvoyer la liste des  Utilisateurs qui sont femmes "
            + "dans la BDD", responseContainer = "list<Utilisateurs>")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "la liste des utilisateurs femmes/ une liste vide") })
    public List<Utilisateur> getalluserBygenreFemme() {
        return userserviceImp.getalluserBygenreFemme();
    }
    //Afficher les Utilisateurs Hommes
    @GetMapping("/userhomme")
    @ApiOperation(value = "renvoi la liste des  Utilisateurs Hommes", notes = "cette methode permet de chercher et renvoyer la liste des  Utilisateurs qui sont Hommes "
            + "dans la BDD", responseContainer = "list<Utilisateurs>")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "la liste des utilisateurs hommes/ une liste vide") })
    public List<Utilisateur> getalluserBygenreHomme() {
        return userserviceImp.getalluserBygenreHomme();
    }



    @GetMapping("/listeUserActive")
    public List<Utilisateur> listeactiveUser() {
        return  userserviceImp.listeactiveUser();
    }

    @GetMapping("/listeUserDesactive")
    public List<Utilisateur> listedesactiveUser() {
        return  userserviceImp.listedesactiveUser();
    }

    @DeleteMapping("/modifieUserActive/{id}")
    public void modifieractiveUser(@PathVariable Long id) {
        userserviceImp.modifieractiveUser(id);
    }

    @DeleteMapping("/modifierdesactiveUser/{id}")
    public void modifierdesactiveUser(@PathVariable Long id) {
        userserviceImp.modifierdesactiveUser(id);
    }

    //Authentification des utilisateurs
    @GetMapping(path = "/loginTel")
    public Utilisateur LoginuserByTelAndPassword(@RequestParam Long tel, @RequestParam String password) {
        return userserviceImp.LoginuserByTelAndPassword(tel, password);
    }

    // methoode de verification de user by tel or email
    @GetMapping("/verifieTelOrEmail")
    public Utilisateur afficheUserbyTelOuEmailService(@RequestParam Long tel,@RequestParam String email) {
        return userserviceImp.afficheUserbyTelOuEmailService(tel,email);
    }
}
