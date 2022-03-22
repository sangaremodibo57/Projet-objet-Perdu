package com.example.NTA.Service;

import com.example.NTA.Model.Log_Annonce_Utilisateur;
import com.example.NTA.Repository.Log_Annonce_UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class Log_Annonce_UtilisateurServiceImp implements Log_Annonce_UtilisateurService {
    @Autowired
    Log_Annonce_UtilisateurRepository logAnnonceUtilisateurRepos;
    @Override
    public Log_Annonce_Utilisateur savelogannonceutilisateur(Log_Annonce_Utilisateur annonceUtilisateur) {
        return logAnnonceUtilisateurRepos.save(annonceUtilisateur);
    }

    @Override
    public Log_Annonce_Utilisateur updatelogannonceutilisateur(Log_Annonce_Utilisateur annonceUtilisateur, Long id) {
        Log_Annonce_Utilisateur logannonutilisateur = logAnnonceUtilisateurRepos.findById(id).get();
        logannonutilisateur.setDate(annonceUtilisateur.getDate());
        return logAnnonceUtilisateurRepos.save(annonceUtilisateur);
    }

    @Override
    public List<Log_Annonce_Utilisateur> getAllannonceutilsateur() {
        return logAnnonceUtilisateurRepos.findAll();
    }

    @Override
    public Log_Annonce_Utilisateur getoneannonceutilisateur(Long id) {
        return logAnnonceUtilisateurRepos.findById(id).get();
    }

    @Override
    public void deleteannonceutilisateur(Long id) {
        logAnnonceUtilisateurRepos.deleteById(id);
    }

}
