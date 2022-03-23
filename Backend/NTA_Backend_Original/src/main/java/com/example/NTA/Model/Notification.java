package com.example.NTA.Model;

import com.example.NTA.Enumeration.Etat;
import com.example.NTA.Enumeration.EtatNotification;
import com.example.NTA.Enumeration.Statut;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    private String description;
    @Enumerated(EnumType.STRING)
    private Etat etat;
    @Enumerated(EnumType.STRING)
    private Statut statut;
    @Enumerated(EnumType.STRING)
    private EtatNotification etatNotification;
    @ManyToOne
    private Reclamation reclame;
    @ManyToOne
    private Admin admin;

}
