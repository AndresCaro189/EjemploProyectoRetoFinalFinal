package com.okr.bdproyectokr.controller;


import com.okr.bdproyectokr.model.TareaKr;
import com.okr.bdproyectokr.model.TareaOkr;
import com.okr.bdproyectokr.repositories.DAOTareaOkr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "",methods = {RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/api/tareaOkrs")
public class TareaOkrController {

    @Autowired
    private DAOTareaOkr repositoryTareaOkr;

    @PostMapping("/tareaOkr")
    public TareaOkr createTareaOkr(@Validated @RequestBody TareaOkr tareaOkr){
        return repositoryTareaOkr.insert(tareaOkr);
    }

    @GetMapping("/")
    public List<TareaOkr> readAllTareaOkr (){
        return repositoryTareaOkr.findAll();
    }

    @PutMapping("/tareaOkr/{id}")
    public TareaOkr updateTareaOkr(@PathVariable String idTareaOkr, @Validated @RequestBody TareaOkr tareaOkr){
        return repositoryTareaOkr.save(tareaOkr);
    }

    @DeleteMapping("/tareaOkr/{id}")
    public void deleteTareaOkr(@PathVariable String idTareaOkr){
        repositoryTareaOkr.deleteById(idTareaOkr);
    }
}
