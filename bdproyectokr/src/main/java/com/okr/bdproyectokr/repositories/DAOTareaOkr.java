package com.okr.bdproyectokr.repositories;

import com.okr.bdproyectokr.model.TareaOkr;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DAOTareaOkr extends MongoRepository<TareaOkr, String> {
}

