package com.example.GestionObjets.Service;


import com.example.GestionObjets.Model.Objettrouve;

import java.util.List;

public interface ObjettrouveService {
    public Objettrouve addobjettrouve(Objettrouve objettrouve);
    public Objettrouve updateobjettrouve(Objettrouve objettrouve, Long id);
    public List<Objettrouve> getallobjettrouve();
    public Objettrouve getobjettrouveByid(Long id);
    public void deleteobjettrouve(Long id);

}
