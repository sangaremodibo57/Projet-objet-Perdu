package com.example.NTA.Controller;

import com.example.NTA.Model.Admin;
import com.example.NTA.Model.Utilisateur;
import com.example.NTA.Repository.AdminRepository;
import com.example.NTA.Service.AdminServiceImp;
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
@RequestMapping(path = "/nta/api/v1")
public class AdminController {
    @Autowired
    AdminServiceImp adminservImp;

    //Ajout d'un admin
    @PostMapping(path = "/saveadmin")
    @ApiOperation(value = "Enregistrer un admin", notes = "cette methode permet d'ajouter un admin", response = Admin.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet admin cree"),
            @ApiResponse(code = 400, message = "l'objet admin n'est pas valide") })
    public Admin postadmin(@RequestBody Admin admin) {
        return adminservImp.postadmin(admin);
    }

    //Modification d'un admin
    @PutMapping(path = "/updateadmin/{id}")
    @ApiOperation(value = "Modifier un administrateur", notes = "cette methode permet de modifier un administrateur", response = Admin.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet administrateur modifié"),
            @ApiResponse(code = 400, message = "l'objet administrateur n'est pas valide") })
    public Admin putadmin(@RequestBody Admin admin, @PathVariable Long id) {
        return adminservImp.putadmin(admin, id);
    }

    //Affichage de la liste globale des administrateurs
    @GetMapping(path = "/getalladmin")
    @ApiOperation(value = "renvoi la liste des administrateurs", notes = "cette methode permet de chercher et renvoyer la liste des administrateurs qui existent"
            + "dans la BDD", responseContainer = "list<Admin>")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "la liste des administrateurs / une liste vide") })
    public List<Admin> getalladmin() {
        return adminservImp.getalladmin();
    }

    //Afficher admin par son id
    @GetMapping(path = "/getadminByid/{id}")
    @ApiOperation(value = "rechercher un administrateur", notes = "cette methode permet de rechercher un administrateur par son id", response = Admin.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "administrateur trouvé dans la BDD"),
            @ApiResponse(code = 404, message = "aucun administrateur avec cet id n'existe dans la BDD") })
    public Admin getoneadmin(@PathVariable Long id) {
        return adminservImp.getoneadmin(id);
    }

    //Suppression d'un admin par son id
    @DeleteMapping(path = "/deleteadmin/{id}")
    @ApiOperation(value = "supprimer un administrateur", notes = "cette methode permet de supprimer un administrateur par son id", response = Admin.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "administrateur supprimé avec succès dans la BDD"),
            @ApiResponse(code = 404, message = "aucun administrateur avec cet id n'existe dans la BDD") })
    public void deleteadmin(@PathVariable Long id) {
        adminservImp.deleteadmin(id);
    }

    //Authentification des Administrateurs
    @GetMapping(path = "/authadmin")
    @ApiOperation(value = "créer une authenfication", notes = "cette methode permet à l'administrateur de s'authentifier")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Authentification réussie"),
            @ApiResponse(code = 400, message = "Authentification non réussie") })
    public Admin AuthuserByEmailAndPassword(@RequestParam String email, @RequestParam String password) {
        return adminservImp.AuthuserByEmailAndPassword(email, password);
    }
    //Modifier Password
    @PutMapping("/putpwd/{id}/{oldpassword}/{newpassword}")
    public Admin Modifypassword(@PathVariable Long id, @PathVariable String oldpassword, @PathVariable String newpassword){
        return adminservImp.Modifypassword(id, oldpassword, newpassword);
    }
    @GetMapping("/listeadminactive")
    public List<Admin> listeactive() {
        return adminservImp.listeactive();
    }

    @GetMapping("/listeadmindesactive")
    public List<Admin> listedesactive() {
        return adminservImp.listedesactive();
    }

    @DeleteMapping("/changeetatadminactive/{id}")
    public void modifieractive(@PathVariable Long id) {
        adminservImp.modifieractive(id);

    }

    @DeleteMapping("/changeetatadmindesactive/{id}")
    public void modifierdesactive(@PathVariable Long id) {
      adminservImp.modifierdesactive(id);

    }
}
