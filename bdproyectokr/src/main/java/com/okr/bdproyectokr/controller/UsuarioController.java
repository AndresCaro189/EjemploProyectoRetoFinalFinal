package com.okr.bdproyectokr.controller;

import com.okr.bdproyectokr.model.TareaOkr;
import com.okr.bdproyectokr.model.Usuario;
import com.okr.bdproyectokr.repositories.DAOTareaOkr;
import com.okr.bdproyectokr.repositories.DAOUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "",methods = {RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private DAOUsuario repositoryUsuario;

    @PostMapping("/usuario")
    public Usuario createUsuario(@Validated @RequestBody Usuario usuario){
        return repositoryUsuario.insert(usuario);
    }

    @GetMapping("/")
    public List<Usuario> readAllUsuario (){
        return repositoryUsuario.findAll();
    }

    @PutMapping("/usuario/{id}")
    public Usuario updateUsuario(@PathVariable String idUsuario, @Validated @RequestBody Usuario usuario){
        return repositoryUsuario.save(usuario);
    }

    @DeleteMapping("/usuario/{id}")
    public void deleteUsuario(@PathVariable String idUsuario){
        repositoryUsuario.deleteById(idUsuario);
    }
}
