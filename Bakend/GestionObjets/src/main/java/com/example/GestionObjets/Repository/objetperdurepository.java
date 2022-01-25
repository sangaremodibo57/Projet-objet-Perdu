package com.example.GestionObjets.Repository;

import com.example.GestionObjets.Model.Objetperdu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface objetperdurepository extends JpaRepository<Objetperdu, Long> {
}
