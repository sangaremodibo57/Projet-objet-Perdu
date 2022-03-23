package com.example.NTA.Service;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Model.Categorie;

import java.util.List;

public interface CategorieService {
    public Categorie postcategorie(Categorie categorie);
    public Categorie putcategorie(Categorie categorie, Long id);
    public List<Categorie> getallcategorie();
    public  Categorie getonecategorie(Long id);
    public void deletecategorie(Long id);
    public  List<Categorie> getCategorieByEtatActive();
    public  List<Categorie> getCategorieByEtatDesactive();
    public  void putCategorieACtive(Long id);
    public  void putCategorieDesactive(Long id);
}
