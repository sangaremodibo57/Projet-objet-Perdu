package com.example.NTA.Service;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.example.NTA.Model.Annonce;
import com.example.NTA.Model.Reclamation;
import com.example.NTA.Repository.AnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

@Service
@Transactional
public class AnnonceServiceImp implements AnnonceService {
    @Autowired
    AnnonceRepository annoncerepos;

    @Override
    public Annonce saveannonce(Annonce annonce) {
        return annoncerepos.save(annonce);
    }

    @Override
    public Annonce updateannonce(Annonce annonce, Long id) {
        Annonce anno = annoncerepos.findById(id).get();
        anno.setNom(annonce.getNom());
        anno.setDate(annonce.getDate());
        anno.setCouleur(annonce.getCouleur());
        anno.setLieu(annonce.getLieu());
        anno.setContenu(annonce.getContenu());
        anno.setPhoto(annonce.getPhoto());
        return annoncerepos.save(anno);
    }

    @Override
    public List<Annonce> getallannonce() {
        return annoncerepos.findAll();
    }

    @Override
    public Annonce getannonceByid(Long id) {
        return annoncerepos.findById(id).get();
    }

    @Override
    public void deleteannonceByid(Long id) {
        annoncerepos.deleteById(id);
    }

    @Override
    public Annonce getannonceByNomLieuCouleur(String nom, String lieu, String couleur, String date) {
        return annoncerepos.findAnnonceByNomAndLieuAndCouleurAndDate(nom, lieu, couleur, date);


    }

    @Override
    public List<Annonce> getAnnonceByUtilisateur(Long id) {
        return annoncerepos.findAnnonceByUtilisateur(id);
    }

    @Override
    public List<Annonce> listeannonceactive() {return annoncerepos.afficheAnnonceActive();
    }

    @Override
    public List<Annonce> listeAnnonceActiveTrouve() {
        return annoncerepos.afficheAnnonceActiveTrouve();
    }

    @Override
    public List<Annonce> listeannoncedesactive() {return annoncerepos.afficheAnnonceDesactive();
    }

    @Override
    public void modifierannonceactive(Long id) {annoncerepos.modifieEtatActiveAnnonce(id);

    }
    
    @Override
    public void modifierannoncedesactive(Long id) {
        Annonce annonce = annoncerepos.findById(id).get();
        annonce.setEtat(Etat.desactive);
        annonce.setStatut(Statut.retrouve);
    }

    @Override
    public List<Annonce> listeannonceTrouve() {return annoncerepos.afficheAnnonceTrouve();
    }

    @Override
    public List<Annonce> listeannoncePerdu() {return annoncerepos.afficheAnnoncePerdu();
    }

    @Override
    public void modifierannonceTrouve(Long id) {annoncerepos.modifieStatutTrouveAnnonce(id);
    }

    @Override
    public void modifierannoncePerdu(Long id) {annoncerepos.modifieStatutPerduAnnonce(id);
    }

    @Override
    public List<Annonce> getSpecifiqueAnnonce(String nom, String lieu, String couleur, int year,Statut statut , String model, String anneeObttion, String nomProprietaireDoc, String prenomProprietaireDoc, String dateNaissanceDoc) {
        LocalDate min = LocalDate.of(year, 1, 1);
        LocalDate max = LocalDate.of(year, 12, 31);
        return annoncerepos.getAnnonceByNomAndLieuAndCouleurAndDateGreaterThanEqualAndDateLessThanEqualAndEtatAndStatutAndModelAndAnneeObttionAndNomProprietaireDocAndPrenomProprietaireDocAndDateNaissanceDoc(
                nom, lieu, couleur, min, max, Etat.active, statut,model,anneeObttion,nomProprietaireDoc, prenomProprietaireDoc,dateNaissanceDoc
        );
    }


}
