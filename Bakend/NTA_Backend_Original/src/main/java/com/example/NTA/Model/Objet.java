package com.example.NTA.Model;

import com.example.NTA.Enumeration.Etat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Objet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private  Long id;
    private  String nom;
    @Enumerated(EnumType.STRING)
    private Etat etat;
    @ManyToOne
    private Categorie categorie;
    @ManyToOne
    private Admin admin;


}
