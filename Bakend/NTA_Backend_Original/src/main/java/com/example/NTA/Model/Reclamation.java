package com.example.NTA.Model;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.Statut;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private  String nom;
    private  String lieu;
    private  String description;
    private  String couleur;
    private  String certificate_perte;
    @Enumerated(EnumType.STRING)
    private Statut statut;
    @ManyToOne
    private  Annonce annonce;
    @Enumerated(EnumType.STRING)
    private Etat etat;
    private String anneeObttion;
    private String model;
    private String nomC;
    private LocalDate date;
    @ManyToOne
    private Utilisateur user;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String dateNaissanceDoc;
    private  String nomProprietaireDoc;
    private  String prenomProprietaireDoc;

}
