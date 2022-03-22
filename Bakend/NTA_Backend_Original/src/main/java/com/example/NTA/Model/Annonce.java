package com.example.NTA.Model;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Annonce  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String nomC;
    private LocalDate date;
    private String contenu;
    private String lieu;
    private String couleur;
    @Enumerated(EnumType.STRING)
    private Etat etat;
    @Enumerated(EnumType.STRING)
    private Statut statut;
    private String photo;
    @ManyToOne
    private Utilisateur utilisateur;
    @JsonIgnore
    @OneToMany(mappedBy = "annonce")
    private Collection<Reclamation> reclamations;
    private String model;
    private String anneeObttion;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String dateNaissanceDoc;
    private  String nomProprietaireDoc;
    private  String prenomProprietaireDoc;

}
