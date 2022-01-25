package com.example.GestionObjets.Service;

import com.example.GestionObjets.Model.Objetperdu;
import com.example.GestionObjets.Repository.objetperdurepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjetperduServiceImp implements ObjetperduService{

    @Autowired
    objetperdurepository objetperdurepo;

    @Override
    public Objetperdu addobjetperdu(Objetperdu objperd) {
        return objetperdurepo.save(objperd);
    }

    @Override
    public Objetperdu updateobjetperdu(Objetperdu objperd, Long id) {
        Objetperdu Objeperd = objetperdurepo.findById(id).get();
        Objeperd.setNom(objperd.getNom());
        Objeperd.setDescription(objperd.getDescription());
        Objeperd.setLieu(objperd.getLieu());
        Objeperd.setDateperte(objperd.getDateperte());
        return objetperdurepo.save(Objeperd);
    }

    @Override
    public List<Objetperdu> getObjetperdu() {
        return objetperdurepo.findAll();
    }

    @Override
    public Objetperdu getObjetperduByidy(Long id) {
        return objetperdurepo.findById(id).get();
    }

    @Override
    public void deleteObjetperduByid(Long id) {
        objetperdurepo.deleteById(id);

    }
}
