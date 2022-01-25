package com.example.GestionObjets.Service;

import com.example.GestionObjets.Model.Objetperdu;

import java.util.List;

public interface ObjetperduService {
    public Objetperdu addobjetperdu(Objetperdu objperd );
    public Objetperdu updateobjetperdu(Objetperdu objperd, Long id);
    public List<Objetperdu> getObjetperdu();
    public Objetperdu getObjetperduByidy(Long id);
    public void deleteObjetperduByid(Long id);

}
