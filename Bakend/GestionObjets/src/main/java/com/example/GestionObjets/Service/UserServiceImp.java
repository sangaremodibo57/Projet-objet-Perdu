package com.example.GestionObjets.Service;

import com.example.GestionObjets.Model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService{

    private User userrepository ;

    @Override
    public User ajoutUser(User user) {
        return userrepository.save(user);
    }

    @Override
    public List<User> listeAdmin() {
        return null;
    }

    @Override
    public User afficheAdmin(Long Id) {
        return null;
    }

    @Override
    public User modifierAdminById(User user, Long Id) {
        return null;
    }

    @Override
    public void suppAdminById(Long Id) {

    }
}
