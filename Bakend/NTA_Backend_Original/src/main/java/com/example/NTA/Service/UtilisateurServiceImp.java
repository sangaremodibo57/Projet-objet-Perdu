package com.example.NTA.Service;

import com.example.NTA.Model.Utilisateur;
import com.example.NTA.Repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UtilisateurServiceImp implements UtilisateurService {
@Autowired
UtilisateurRepository userrepos;
    @Override
    public Utilisateur saveuser(Utilisateur utilisateur) {
        return userrepos.save(utilisateur);
    }

    @Override
    public Utilisateur updateuser(Utilisateur utilisateur, Long id) {
        Utilisateur user = userrepos.findById(id).get();
        user.setNom_complet(utilisateur.getNom_complet());
        user.setEmail(utilisateur.getEmail());
        user.setLogin(utilisateur.getLogin());
        user.setPassword(utilisateur.getPassword());
        user.setGenre(utilisateur.getGenre());
        user.setTel(utilisateur.getTel());
        user.setProfession(utilisateur.getProfession());
        return userrepos.save(user);
    }

    @Override
    public List<Utilisateur> getalluser() {
        return userrepos.findAll();
    }

    @Override
    public Utilisateur getuserByid(Long id) {
        return userrepos.findById(id).get();
    }

    @Override
    public void deleteuser(Long id) {
        userrepos.deleteById(id);

    }

    @Override
    public Utilisateur AuthuserByEmailAndPassword(String email, String password) {
        return userrepos.findByEmailAndPassword(email, password);
    }

    @Override
    public List<Utilisateur> getalluserBygenreFemme() {
        return userrepos.getAlluserFemme();
    }

    @Override
    public List<Utilisateur> getalluserBygenreHomme() {
        return userrepos.getAlluserHomme();
    }


    // methode de virication lor de register by tel or email
    @Override
    public Utilisateur afficheUserbyTelOuEmailService(Long tel, String email) {
        return userrepos.selectionUserByTelOrEmailRepository(tel, email);
    }


    @Override
    public List<Utilisateur> listeactiveUser() {
        return  userrepos.afficheUserActive();
    }

    @Override
    public List<Utilisateur> listedesactiveUser() {
        return  userrepos.afficheUserDesactive();
    }

    @Override
    public void modifieractiveUser(Long id) {
        userrepos.modifieEtatActiveUser(id);
    }

    @Override
    public void modifierdesactiveUser(Long id) {
        userrepos.modifieEtatDesactiveUser(id);
    }


    @Override
    public Utilisateur LoginuserByTelAndPassword(Long tel, String password) {
        return userrepos.findByTelAndPassword(tel, password);
    }
}
