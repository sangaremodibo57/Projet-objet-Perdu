package com.example.NTA.Service;

import com.example.NTA.Model.Objet;
import com.example.NTA.Repository.ObjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ObjetServiceImp implements ObjetService {
@Autowired
    ObjetRepository objetrepos;
    @Override
    public Objet postobjet(Objet objet) {
        return objetrepos.save(objet);
    }

    @Override
    public Objet putobjet(Objet objet, Long id) {
        Objet obje = objetrepos.findById(id).get();
        obje.setNom(objet.getNom());
        obje.setEtat(objet.getEtat());
        return  objetrepos.save(obje);
    }

    @Override
    public List<Objet> getallobjet() {
        return objetrepos.findAll();
    }

    @Override
    public Objet getoneobjet(Long id) {
        return objetrepos.findById(id).get();
    }

    @Override
    public void deleteobjet(Long id) {
        objetrepos.deleteById(id);

    }

    @Override
    public List<Objet> getAllObjetActive() {
        return objetrepos.getAllobjetActive();
    }

    @Override
    public List<Objet> getAllObjetDesactive() {
        return objetrepos.getAllobjetDesactive();
    }

    @Override
    public void updateEtatObjetActive(Long id) {
        objetrepos.putObjetEtatActive(id);

    }

    @Override
    public void updateEtatObjetDesactive(Long id) {
        objetrepos.putObjetEtatDesactive(id);
    }


}
