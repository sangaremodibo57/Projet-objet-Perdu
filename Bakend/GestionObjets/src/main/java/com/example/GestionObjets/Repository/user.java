package com.example.GestionObjets.Repository;

import com.example.GestionObjets.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository annote les classes au niveau de la couche de persistance, qui agira comme un référentiel de base de données.
@Repository
public interface user extends JpaRepository<User , Long> {
}
