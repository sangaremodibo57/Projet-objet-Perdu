package com.example.GestionObjets.Controller;

import com.example.GestionObjets.Model.Objettrouve;
import com.example.GestionObjets.Repository.objettrouverepository;
import com.example.GestionObjets.Service.ObjettrouveServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@CrossOrigin("*")
@RequestMapping("/api")
public class ObjettrouveController {
    @Autowired
    ObjettrouveServiceImp objettrouservimp;

    @PostMapping("/addobjettrouve")
    public Objettrouve addobjettrouve(@RequestBody Objettrouve objettrouve) {
        return objettrouservimp.addobjettrouve(objettrouve) ;
    }

    @PutMapping("/updateobjettrouve/{id}")
    public Objettrouve updateobjettrouve(@RequestBody Objettrouve objettrouve, @PathVariable Long id) {
        return objettrouservimp.updateobjettrouve(objettrouve, id);
    }

    @GetMapping("/allobjettrouve")
    public List<Objettrouve> getallobjettrouve() {
        return objettrouservimp.getallobjettrouve();
    }

    @GetMapping("/getobjettrouveByid/{id}")
    public Objettrouve getobjettrouveByid(@PathVariable Long id) {
        return objettrouservimp.getobjettrouveByid(id);
    }

    @DeleteMapping("/deleteobjettrouv/{id}")
    public void deleteobjettrouve(@PathVariable Long id) {
        objettrouservimp.deleteobjettrouve(id);

    }
}
