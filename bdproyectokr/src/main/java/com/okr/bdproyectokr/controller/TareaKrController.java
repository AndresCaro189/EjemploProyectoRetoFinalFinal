package com.okr.bdproyectokr.controller;


import com.okr.bdproyectokr.model.TareaKr;
import com.okr.bdproyectokr.repositories.DAOTareaKr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "",methods = {RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/api/tareaKrs")
public class TareaKrController {

    @Autowired
    private DAOTareaKr repositoryTareaKr;

    @PostMapping("/tareaKr")
    public TareaKr createTareaKr(@Validated @RequestBody TareaKr tareakr){
        return repositoryTareaKr.insert(tareakr);
    }

    @GetMapping("/")
    public List<TareaKr> readAllTareaKr(){
        return repositoryTareaKr.findAll();
    }

    @PutMapping("/tareaKr/{id}")
    public TareaKr updateTareaKr(@PathVariable String idTareaOkr, @Validated @RequestBody TareaKr tareakr){
        return repositoryTareaKr.save(tareakr);
    }

    @DeleteMapping("/tareaKr/{id}")
    public void deleteTareaKr(@PathVariable String idTareaOkr){
        repositoryTareaKr.deleteById(idTareaOkr);
    }
}
