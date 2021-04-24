package com.okr.bdproyectokr.repositories;

import com.okr.bdproyectokr.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DAOUsuario extends MongoRepository<Usuario, String> {
}