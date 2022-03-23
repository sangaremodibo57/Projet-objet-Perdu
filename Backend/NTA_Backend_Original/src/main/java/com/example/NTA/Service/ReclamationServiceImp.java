package com.example.NTA.Service;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Reclamation;
import com.example.NTA.Repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class ReclamationServiceImp  implements ReclamationService{
    @Autowired
    ReclamationRepository reclamatrepos;
    @Override
    public Reclamation addreclamation(Reclamation reclamation) {
        return reclamatrepos.save(reclamation);
    }

    @Override
    public Reclamation updatereclamation(Reclamation reclamation, Long id) {
        Reclamation reclame = reclamatrepos.findById(id).get();
        reclame.setNom(reclamation.getNom());
        reclame.setDescription(reclamation.getDescription());
        return reclamatrepos.save(reclame);
    }

    @Override
    public List<Reclamation> getallreclamation() {
        return reclamatrepos.findAll();
    }

    @Override
    public Reclamation getonereclamation(Long id) {
        return reclamatrepos.findById(id).get();
    }

    @Override
    public void deletereclamation(Long id) {
        reclamatrepos.deleteById(id);

    }

    @Override
    public List<Reclamation> getReclamationByEtatActive() {
        return reclamatrepos.afficheReclamationActiveNovalide();
    }

    @Override
    public List<Reclamation> getReclamationByEtatDesactive() {
        return reclamatrepos.afficheReclamationdesactivevalide();
    }

    @Override
    public void putReclamationActive(Long id) {
        reclamatrepos.modifieEtatActive(id);
    }

    @Transactional
    @Override
    public void putReclamationDesactive(Long id) {
        Reclamation reclamation = reclamatrepos.findById(id).get();
        reclamation.setEtat(Etat.desactive);
        reclamation.setStatut(Statut.valide);
        //reclamatrepos.modifieEtatDesactive(id);
    }

    // change l'etat en desactive
    @Transactional
    @Override
    public void putReclamationEtatDesactive(Long id) {
        Reclamation reclamation = reclamatrepos.findById(id).get();
        reclamation.setEtat(Etat.desactive);
    }

    @Override
    public Reclamation getReclamationByNomNomCCouleur(String nom, String nomC, String couleur) {
        return reclamatrepos.findReclamationByNomNomCCouleur(nom, nomC, couleur);
    }

    @Override
    public List<Reclamation> getSpecifiqueReclamation(String nom, String lieu, String couleur, int year,Statut statut , String model, String anneeObttion, String nomProprietaireDoc, String prenomProprietaireDoc, String dateNaissanceDoc) {
        LocalDate min = LocalDate.of(year, 1, 1);
        LocalDate max = LocalDate.of(year, 12, 31);
        return reclamatrepos.getReclamationByNomAndLieuAndCouleurAndDateGreaterThanEqualAndDateLessThanEqualAndEtatAndStatutAndModelAndAnneeObttionAndNomProprietaireDocAndPrenomProprietaireDocAndDateNaissanceDoc(
                nom, lieu, couleur, min, max, Etat.active, statut,model,anneeObttion,nomProprietaireDoc, prenomProprietaireDoc,dateNaissanceDoc
        );
    }


}
