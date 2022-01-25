package com.example.GestionObjets.Service;

import com.example.GestionObjets.Model.Objettrouve;
import com.example.GestionObjets.Repository.objettrouverepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjettrouveServiceImp implements ObjettrouveService {

    @Autowired
    objettrouverepository objtrouvereposi;

    @Override
    public Objettrouve addobjettrouve(Objettrouve objettrouve) {
        return objtrouvereposi.save(objettrouve);
    }

    @Override
    public Objettrouve updateobjettrouve(Objettrouve objettrouve, Long id) {
        Objettrouve objtrouv = objtrouvereposi.findById(id).get();
        objtrouv.setNom(objettrouve.getNom());
        objtrouv.setDescription(objettrouve.getDescription());
        objtrouv.setLieu(objettrouve.getLieu());
        objtrouv.setDatetrouve(objettrouve.getDatetrouve());
        return objtrouvereposi.save(objtrouv);
    }

    @Override
    public List<Objettrouve> getallobjettrouve() {
        return objtrouvereposi.findAll();
    }

    @Override
    public Objettrouve getobjettrouveByid(Long id) {
        return objtrouvereposi.findById(id).get();
    }

    @Override
    public void deleteobjettrouve(Long id) {
        objtrouvereposi.deleteById(id);

    }
}
