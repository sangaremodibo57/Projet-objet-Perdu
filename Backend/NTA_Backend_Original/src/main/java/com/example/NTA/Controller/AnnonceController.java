package com.example.NTA.Controller;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Annonce;
import com.example.NTA.Model.Utilisateur;
import com.example.NTA.Repository.AnnonceRepository;
import com.example.NTA.Service.AnnonceServiceImp;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/nta/api/v1")
@Api("/nta/api/v1")
public class AnnonceController {
@Autowired
    AnnonceServiceImp annoservimp;

@Autowired
    AnnonceRepository annonceRepository;

//Ajout d'Annonce
    @PostMapping(path = "/saveannonce")
    @ApiOperation(value = "Enregistrer une annonce", notes = "cette methode permet d'ajouter une annonce", response = Annonce.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet annonce cree"),
            @ApiResponse(code = 400, message = "l'objet annonce n'est pas valide") })
    public Annonce saveannonce(@RequestBody Annonce annonce) {
        return annoservimp.saveannonce(annonce);
    }

//Modification d'Annonce
    @PutMapping(path = "/updateannonce/{id}")
    @ApiOperation(value = "Modifier une annonce", notes = "cette methode permet de modifier une annonce", response = Annonce.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "l'objet annonce modifié"),
            @ApiResponse(code = 400, message = "l'objet annonce n'est pas valide") })
    public Annonce updateannonce(@RequestBody Annonce annonce, @PathVariable Long id) {
        return annoservimp.updateannonce(annonce, id) ;
    }

    //Affichage de toutes les annonces
    @GetMapping(path = "/allannonce")
    @ApiOperation(value = "renvoi la liste des annonces", notes = "cette methode permet de chercher et renvoyer la liste des annonces qui existent"
            + "dans la BDD", responseContainer = "list<Annonce>")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "la liste des annonce / une liste vide") })
    public List<Annonce> getallannonce() {
        return annoservimp.getallannonce();
    }

    //Affichage de l'annonce par son id
    @GetMapping(path = "/oneannonce/{id}")
    @ApiOperation(value = "rechercher une annonce", notes = "cette methode permet de rechercher une annonce par son id", response = Annonce.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "annonce trouvé dans la BDD"),
            @ApiResponse(code = 404, message = "aucune annonce avec cet id n'existe dans la BDD") })
    public Annonce getannonceByid(@PathVariable Long id) {
        return annoservimp.getannonceByid(id);
    }

    //Spression d'une annonce par son id
    @DeleteMapping(path = "/deleteannonce/{id}")
    @ApiOperation(value = "supprimer une annonce", notes = "cette methode permet de supprimer une annonce par son id", response = Annonce.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Annonce supprimé avec succès dans la BDD"),
            @ApiResponse(code = 404, message = "aucune annonce avec cet id n'existe dans la BDD") })
    public void deleteannonceByid(@PathVariable Long id) {
        annoservimp.deleteannonceByid(id);

    }
    //Vérification d'annonce
    @GetMapping(path = "/verifie")
    @ApiOperation(value = "Vérifier une annonce", notes = "cette methode permet de vérifier si une annonce dans la BDD", response = Annonce.class)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Annonce trouvé avec succès dans la BDD"),
            @ApiResponse(code = 404, message = "aucune annonce avec ces informations n'existe dans la BDD") })
    public Annonce getannonceByNomLieuCouleur(@RequestParam String nom, @RequestParam String lieu, @RequestParam String couleur, @RequestParam String date) {
        return annonceRepository.findAnnonceByNomAndLieuAndCouleurAndDate(nom, lieu, couleur,date);
    }
    @GetMapping("/annonceByutilisateur/{id}")
    public List<Annonce> getAnnonceByUtilisateur(@PathVariable Long id) {
        return annoservimp.getAnnonceByUtilisateur(id);
    }

//liste annonce etat= active statut = perdu
    @GetMapping("/listeannonceactive")
    public List<Annonce> listeannonceactive() {return annoservimp.listeannonceactive();
    }

    //liste annonce etat= active statut = trouve
    @GetMapping("/listeannonceactivetrouve")
    public List<Annonce> listeAnnonceActiveTrouve(){
        return annoservimp.listeAnnonceActiveTrouve();
    }



    @GetMapping("/listeannoncedesactive")
    public List<Annonce> listeannoncedesactive() {return annoservimp.listeannoncedesactive();
    }

    @PutMapping("/changeannnonceactive/{id}")
    public void modifierannonceactive(@PathVariable Long id) {annoservimp.modifierannonceactive(id);

    }

    @PutMapping("/changeannoncedesactive/{id}")
    public void modifierannoncedesactive(@PathVariable Long id) {annoservimp.modifierannoncedesactive(id);}

    @GetMapping("/listeannoncetrouve")
    public List<Annonce> listeannonceTrouve() {return annoservimp.listeannonceTrouve();
    }

    @GetMapping("/listeannonceperdu")
    public List<Annonce> listeannoncePerdu() {return listeannoncePerdu();
    }

    @PutMapping("/changeannoncetrouve/{id}")
    public void modifierannonceTrouve(@PathVariable Long id) {annoservimp.modifierannonceTrouve(id);
    }

    @PutMapping("/changeannonceperdu/{id}")
    public void modifierannoncePerdu(@PathVariable Long id) {annoservimp.modifierannoncePerdu(id);
    }

    @GetMapping("/find/{nom}&{lieu}&{couleur}&{year}&{statut}&{model}&{anneeObttion}&{nomProprietaireDoc}&{prenomProprietaireDoc}&{dateNaissanceDoc}")
    public List<Annonce> getSpecifiqueAnnonce(
            @PathVariable("nom") String nom,
            @PathVariable("lieu") String lieu,
            @PathVariable("couleur") String couleur,
            @PathVariable("year") int year,
            @PathVariable("statut") Statut statut,
            @PathVariable("model") String model,
            @PathVariable("anneeObttion") String anneeObttion,
            @PathVariable("nomProprietaireDoc") String nomProprietaireDoc,
            @PathVariable("prenomProprietaireDoc") String prenomProprietaireDoc,
            @PathVariable("dateNaissanceDoc") String dateNaissanceDoc
    ){
        return annoservimp.getSpecifiqueAnnonce(nom, lieu, couleur, year,statut,model,anneeObttion, nomProprietaireDoc, prenomProprietaireDoc, dateNaissanceDoc);
    }

}
