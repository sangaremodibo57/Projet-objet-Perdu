package com.example.GestionObjets.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
// @Entity : indiquant qu'il s'agit d'une entité JPA.
// @Data : est une annotation pratique qui combine les fonctionnalités des annotations suivantes : @ToString @EqualsAndHashCode @Getter @Setter @RequiredArgsConstructor
@Entity @Data @NoArgsConstructor @AllArgsConstructor @ToString
public class User implements Serializable {
    // @Id :  JPA la reconnaisse comme l'ID de l'objet.
    // @GenerateValue :pour indiquer que l'ID doit être généré automatiquement.
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String password;
}
