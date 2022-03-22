package com.example.NTA.Service;

import com.example.NTA.Model.Admin;
import com.example.NTA.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AdminServiceImp implements AdminService{
    @Autowired
    AdminRepository adminrepos;
    @Override
    public Admin postadmin(Admin admin) {
        return adminrepos.save(admin);
    }

    @Override
    public Admin putadmin(Admin admin, Long id) {
        Admin adm = adminrepos.findById(id).get();
        adm.setNom_complet(admin.getNom_complet());
        adm.setEmail(admin.getEmail());
        adm.setLogin(admin.getLogin());
        adm.setGenre(admin.getGenre());
        adm.setPassword(admin.getPassword());
        adm.setTel(admin.getTel());
        adm.setPhoto(admin.getPhoto());
        return adminrepos.save(adm);
    }

    @Override
    public List<Admin> getalladmin() {
        return adminrepos.findAll();
    }

    @Override
    public Admin getoneadmin(Long id) {
        return adminrepos.findById(id).get();
    }

    @Override
    public void deleteadmin(Long id) {
        adminrepos.deleteById(id);
    }

    @Override
    public Admin AuthuserByEmailAndPassword(String email, String password) {
        return adminrepos.findByEmailAndPassword(email, password);
    }

    @Override
    public Admin Modifypassword(Long id, String oldpassword, String newpassword) {
        Admin adm = adminrepos.findById(id).get();
        if (oldpassword.equals(adm.getPassword())){
            adm.setPassword(newpassword);
            System.out.println(newpassword);
            return adminrepos.save(adm);

        }else{
            return adm;
        }
    }

    @Override
    public List<Admin> listeactive() {
        return adminrepos.afficheAdminActive();
    }

    @Override
    public List<Admin> listedesactive() {
        return adminrepos.afficheAdminDesactive();
    }

    @Override
    public void modifieractive(Long id) {
        adminrepos.modifieEtatActive(id);

    }

    @Override
    public void modifierdesactive(Long id) {
        adminrepos.modifieEtatDesactive(id);

    }
}
