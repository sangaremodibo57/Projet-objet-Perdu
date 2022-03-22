package com.example.NTA.Controller;

import com.example.NTA.Model.Categorie;
import com.example.NTA.Model.Objet;
import com.example.NTA.Model.Utilisateur;
import com.example.NTA.Repository.ObjetRepository;
import com.example.NTA.Service.ObjetServiceImp;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Controller
@RestController
@RequestMapping("/nta/api/v1")
@Api("/nta/api/v1")
@CrossOrigin("*")
public class ObjetController {
    @Autowired
    ObjetServiceImp objetservImp;

    //Ajout d'objet
    @PostMapping("/addobjet")
    @ApiOperation(value = "Enregistrer un objet", notes = "cette methode permet d'ajouter un objet", response = Objet.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet objet cree"),
            @ApiResponse(code = 400, message = "l'objet objet n'est pas valide") })
    public Objet postobjet(@RequestBody Objet objet) {
        return objetservImp.postobjet(objet);
    }

    //Modification d'objet
    @PutMapping("updateobjet/{id}")
    @ApiOperation(value = "Modifier un objet", notes = "cette methode permet de modifier un objet", response = Objet.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet objet modifié"),
            @ApiResponse(code = 400, message = "l'objet objet n'est pas valide") })
    public Objet putobjet(@RequestBody Objet objet, @PathVariable Long id) {
        return objetservImp.putobjet(objet, id) ;
    }

    //Afficher la Liste globale des objets
    @GetMapping("/allobjet")
    @ApiOperation(value = "renvoi la liste des objets", notes = "cette methode permet de chercher et renvoyer la liste des objets qui existent"
            + "dans la BDD", responseContainer = "list<Objet>")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "la liste des objets / une liste vide") })
    public List<Objet> getallobjet() {
        return objetservImp.getallobjet();
    }

    //Afficher l'objet par id
    @GetMapping("/oneobjet/{id}")
    @ApiOperation(value = "rechercher un objet", notes = "cette methode permet de rechercher un objet par son id", response = Objet.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "objet trouvé dans la BDD"),
            @ApiResponse(code = 404, message = "aucun objet avec cet id n'existe dans la BDD") })
    public Objet getoneobjet(@PathVariable Long id) {
        return objetservImp.getoneobjet(id);
    }

    //Suppression d'objet par id
    @DeleteMapping("/deleteonjet/{id}")
    @ApiOperation(value = "supprimer un objet", notes = "cette methode permet de supprimer un objet par son id", response = Objet.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "objet supprimé avec succès dans la BDD"),
            @ApiResponse(code = 404, message = "aucun objet avec cet id n'existe dans la BDD") })
    public void deleteobjet(@PathVariable Long id) {
        objetservImp.deleteobjet(id);
    }

    @GetMapping("/allobjetactive")
    public List<Objet> getAllObjetActive() {
        return objetservImp.getAllObjetActive();
    }

    @GetMapping("/allobjetdesactive")
    public List<Objet> getAllObjetDesactive() {
        return objetservImp.getAllObjetDesactive();
    }

    @PutMapping("/changeetatobjetactive/{id}")
    public void updateEtatObjetActive(@PathVariable Long id) {
      objetservImp.updateEtatObjetActive(id);

    }

    @PutMapping("/changeetatobjetdesactive/{id}")
    public void updateEtatObjetDesactive(@PathVariable Long id) {
        objetservImp.updateEtatObjetDesactive(id);
    }
}
