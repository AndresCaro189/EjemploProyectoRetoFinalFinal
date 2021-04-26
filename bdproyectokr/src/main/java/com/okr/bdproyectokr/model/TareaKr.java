package com.okr.bdproyectokr.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collation = "tareakr")
public class TareaKr {

    @Id
    private String idTareaKr;
    private String nombreTareakr;
    private LocalDate expiracionkr;

    public String getIdTareaKr() {
        return idTareaKr;
    }

    public void setIdTareaKr(String idTareaKr) {
        this.idTareaKr = idTareaKr;
    }

    public String getNombreTareakr() {
        return nombreTareakr;
    }

    public void setNombreTareakr(String nombreTareakr) {
        this.nombreTareakr = nombreTareakr;
    }

    public LocalDate getExpiracionkr() {
        return expiracionkr;
    }

    public void setExpiracionkr(LocalDate expiracionkr) {
        this.expiracionkr = expiracionkr;
    }
}
