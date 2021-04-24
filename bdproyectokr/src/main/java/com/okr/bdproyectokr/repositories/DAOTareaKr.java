package com.okr.bdproyectokr.repositories;

import com.okr.bdproyectokr.model.TareaKr;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DAOTareaKr extends MongoRepository<TareaKr, String> {
}
