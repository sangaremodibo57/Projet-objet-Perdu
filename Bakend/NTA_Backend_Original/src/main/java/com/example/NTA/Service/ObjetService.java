package com.example.NTA.Service;

import com.example.NTA.Model.Objet;

import java.util.List;

public interface ObjetService {
    public Objet postobjet(Objet objet);
    public  Objet putobjet(Objet objet, Long id);
    public List<Objet> getallobjet();
    public  Objet getoneobjet(Long id);
    public void deleteobjet(Long id);
    public  List<Objet> getAllObjetActive();
    public  List<Objet> getAllObjetDesactive();
    public  void updateEtatObjetActive(Long id);
    public  void updateEtatObjetDesactive(Long id);
}
