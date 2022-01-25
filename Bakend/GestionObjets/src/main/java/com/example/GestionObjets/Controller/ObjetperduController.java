package com.example.GestionObjets.Controller;

import com.example.GestionObjets.Model.Objetperdu;
import com.example.GestionObjets.Service.ObjetperduService;
import com.example.GestionObjets.Service.ObjetperduServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin("*")
@RequestMapping("/api")
@RestController
public class ObjetperduController {
    @Autowired
    ObjetperduServiceImp objperserv;

    //Ajout objetperdu
    @PostMapping("/saveobjetperdu")
    public Objetperdu addobjetperdu(@RequestBody Objetperdu objperd) {
        return objperserv.addobjetperdu(objperd);
    }

   //ModificationObjetperdu
    @PutMapping("/updateobjetperdu/{id}")
    public Objetperdu updateobjetperdu(@RequestBody Objetperdu objperd,@PathVariable Long id) {

        return objperserv.updateobjetperdu(objperd, id);
    }

   //Affihage de tous objets perdus
    @GetMapping("/allobjetperdu")
    public List<Objetperdu> getObjetperdu() {
        return objperserv.getObjetperdu();
    }

    @GetMapping("/oneobjetperdu/{id}")
    public Objetperdu getObjetperduByidy(@PathVariable Long id) {
        return objperserv.getObjetperduByidy(id);
    }

    @GetMapping( "/deleteoneobjetperdu/{id}")
    public void deleteObjetperduByid(@PathVariable Long id) {
        objperserv.deleteObjetperduByid(id);

    }
}
