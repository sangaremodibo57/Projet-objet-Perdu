package com.example.NTA.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Log_Annonce_Utilisateur {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private  Long id;
    private Date date;
    @ManyToOne
    private  Utilisateur utilisateur;
    @ManyToOne
    private  Annonce annonce;
}
