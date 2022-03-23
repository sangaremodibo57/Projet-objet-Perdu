package com.example.NTA.Controller;

import com.example.NTA.Model.Categorie;
import com.example.NTA.Model.Utilisateur;
import com.example.NTA.Repository.CategorieRepository;
import com.example.NTA.Service.CategorieServiceImp;
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
public class CategorieController {
    @Autowired
    CategorieServiceImp categorieservImp;

    //Ajout d'une catégorie
    @PostMapping(path = "/addcategorie")
    @ApiOperation(value = "Enregistrer une catégorie", notes = "cette methode permet d'ajouter une catégorie", response = Categorie.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet catégorie cree"),
            @ApiResponse(code = 400, message = "l'objet catégorie n'est pas valide") })
    public Categorie postcategorie(@RequestBody Categorie categorie) {
        return categorieservImp.postcategorie(categorie);
    }

    //Modification d'une catégorie
    @PutMapping(path = "/updatecategorie/{id}")
    @ApiOperation(value = "Modifier une catégorie", notes = "cette methode permet de modifier une catégorie", response = Categorie.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet catégorie modifié"),
            @ApiResponse(code = 400, message = "l'objet catégorie n'est pas valide") })
    public Categorie putcategorie(@RequestBody Categorie categorie, @PathVariable Long id) {
        return categorieservImp.putcategorie(categorie, id);
    }

    //Liste globale des catégories
    @GetMapping(path = "/allcategorie")
    @ApiOperation(value = "renvoi la liste des catégories", notes = "cette methode permet de chercher et renvoyer la liste des catégories qui existent"
            + "dans la BDD", responseContainer = "list<Categorie>")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "la liste des catégories / une liste vide") })
    public List<Categorie> getallcategorie() {
        return categorieservImp.getallcategorie();
    }

    //Categorie par id
    @GetMapping(path = "onecategorie/{id}")
    @ApiOperation(value = "rechercher une catégorie", notes = "cette methode permet de rechercher une catégorie par son id", response = Categorie.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "catégorie trouvé dans la BDD"),
            @ApiResponse(code = 404, message = "aucune Catégorie avec cet id n'existe dans la BDD") })
    public Categorie getonecategorie(@PathVariable Long id) {
        return categorieservImp.getonecategorie(id);
    }

    //Suppression de catégorie par id
    @DeleteMapping(path = "/deletecategorie/{id}")
    @ApiOperation(value = "supprimer une catégorie", notes = "cette methode permet de supprimer une catégorie par son id", response = Categorie.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "catégorie supprimé avec succès dans la BDD"),
            @ApiResponse(code = 404, message = "aucune une catégorie avec cet id n'existe dans la BDD") })
    public void deletecategorie(@PathVariable Long id) {
        categorieservImp.deletecategorie(id);
    }
    @GetMapping("/categorieactive")
    public List<Categorie> getCategorieByEtatActive() {
        return categorieservImp.getCategorieByEtatActive();
    }

    @GetMapping("/categoriedesactive")
    public List<Categorie> getCategorieByEtatDesactive() {
        return categorieservImp.getCategorieByEtatDesactive();
    }

    @PutMapping("/changecategorieetatactive/{id}")
    public void  putCategorieACtive(@PathVariable Long id) {
         categorieservImp.putCategorieACtive(id);
    }

    @PutMapping("/changecategorieetatdesactive/{id}")
    public void putCategorieDesactive(@PathVariable Long id) {
          categorieservImp.putCategorieDesactive(id);
    }
}
