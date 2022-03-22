package com.example.NTA.Service;

import com.example.NTA.Model.Categorie;
import com.example.NTA.Repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CategorieServiceImp implements CategorieService {

    @Autowired
    CategorieRepository categorierepos;
    @Override
    public Categorie postcategorie(Categorie categorie) {
        return categorierepos.save(categorie);
    }

    @Override
    public Categorie putcategorie(Categorie categorie, Long id) {
        Categorie catego = categorierepos.findById(id).get();
        catego.setNom(categorie.getNom());
        return categorierepos.save(catego);
    }

    @Override
    public List<Categorie> getallcategorie() {
        return categorierepos.findAll();
    }

    @Override
    public Categorie getonecategorie(Long id) {
        return categorierepos.findById(id).get();
    }

    @Override
    public void deletecategorie(Long id) {
        categorierepos.deleteById(id);
    }

    @Override
    public List<Categorie> getCategorieByEtatActive() {
        return categorierepos.getCatgeorieActive();
    }

    @Override
    public List<Categorie> getCategorieByEtatDesactive() {
        return categorierepos.getCatgeorieDesactive();
    }

    @Override
    public void putCategorieACtive(Long id) {
         categorierepos.changeCategorieEtatActive(id);
    }

    @Override
    public void putCategorieDesactive(Long id) {
         categorierepos.changeCategorieEtatDesactive(id);
    }


}
