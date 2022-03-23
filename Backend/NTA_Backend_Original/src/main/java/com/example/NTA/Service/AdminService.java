package com.example.NTA.Service;

import com.example.NTA.Model.Admin;
import com.example.NTA.Model.Categorie;

import java.util.List;

public interface AdminService {
    public Admin postadmin(Admin admin);
    public Admin putadmin(Admin admin, Long id);
    public List<Admin> getalladmin();
    public Admin getoneadmin(Long id);
    public void deleteadmin(Long id);
    public  Admin AuthuserByEmailAndPassword(String email, String password);
    public Admin Modifypassword(Long id,String oldpassword, String newpassword );
    public  List<Admin> listeactive();
    public  List<Admin> listedesactive();
    public  void modifieractive(Long id);
    public  void modifierdesactive(Long id);

}
