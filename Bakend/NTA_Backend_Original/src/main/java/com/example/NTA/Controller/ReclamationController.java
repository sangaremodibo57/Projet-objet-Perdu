package com.example.NTA.Controller;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Annonce;
import com.example.NTA.Model.Reclamation;
import com.example.NTA.Service.ReclamationServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("nta/api/v1")
public class ReclamationController {
    @Autowired
    ReclamationServiceImp reclameserviceimp;

    @PostMapping("/savereclame")
    public Reclamation addreclamation(@RequestBody Reclamation reclamation) {
        return reclameserviceimp.addreclamation(reclamation);
    }

    @PutMapping("/updatereclame/{id}")
    public Reclamation updatereclamation(@RequestBody Reclamation reclamation, @PathVariable Long id) {
        return reclameserviceimp.updatereclamation(reclamation, id);
    }

    @GetMapping("/allreclame")
    public List<Reclamation> getallreclamation() {
        return reclameserviceimp.getallreclamation();
    }

    @GetMapping("/reclameByid/{id}")
    public Reclamation getonereclamation(@PathVariable Long id) {
        return reclameserviceimp.getonereclamation(id);
    }

    @DeleteMapping("/deletereclame/{id}")
    public void deletereclamation(@PathVariable Long id) {
        reclameserviceimp.deletereclamation(id);

    }
    @GetMapping("/listereclamationactivenovalide")
    public List<Reclamation> getReclamationByEtatActive() {
        return reclameserviceimp.getReclamationByEtatActive();
    }

    @GetMapping("/listereclamationdesactive")
    public List<Reclamation> getReclamationByEtatDesactive() {
        return reclameserviceimp.getReclamationByEtatDesactive();
    }
    //Change etat reclamation en desactive
    @PutMapping("/putReclamationEtatEnDesactive/{id}")
    public void putReclamationEtatDesactive(@PathVariable Long id) {
        reclameserviceimp.putReclamationEtatDesactive(id);
    }
    @PutMapping("/changereclamationactive/{id}")
    public void putReclamationActive(@PathVariable Long id) {
        reclameserviceimp.putReclamationActive(id);
    }

    @PutMapping("/changereclamationdesactive/{id}")
    public void putReclamationDesactive(@PathVariable Long id) {
        reclameserviceimp.putReclamationDesactive(id);
    }

    @GetMapping("/verifiReclamer")
    public Reclamation getReclamationByNomNomCCouleur(@RequestParam String nom, @RequestParam String nomC,@RequestParam  String couleur) {
        return reclameserviceimp.getReclamationByNomNomCCouleur(nom,nomC,couleur);
    }

    //new verification
    @GetMapping("/findReclamation/{nom}&{lieu}&{couleur}&{year}&{statut}&{model}&{anneeObttion}&{nomProprietaireDoc}&{prenomProprietaireDoc}&{dateNaissanceDoc}")
    public List<Reclamation> getSpecifiqueReclamation(
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
        return reclameserviceimp.getSpecifiqueReclamation(nom, lieu, couleur, year,statut,model,anneeObttion, nomProprietaireDoc, prenomProprietaireDoc, dateNaissanceDoc);
    }
}
