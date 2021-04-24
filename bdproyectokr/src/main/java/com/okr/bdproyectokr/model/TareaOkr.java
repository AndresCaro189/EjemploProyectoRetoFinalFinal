package com.okr.bdproyectokr.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collation = "tareaOkr")
public class TareaOkr {

    @Id
    private String idTareaOkr;

    private String nombreTareaOkr;
    private LocalDate expiracionOkr;

    public String getIdTareaOkr() {
        return idTareaOkr;
    }

    public void setIdTareaOkr(String idTareaOkr) {
        this.idTareaOkr = idTareaOkr;
    }

    public String getNombreTareaOkr() {
        return nombreTareaOkr;
    }

    public void setNombreTareaOkr(String nombreTareaOkr) {
        this.nombreTareaOkr = nombreTareaOkr;
    }

    public LocalDate getExpiracionOkr() {
        return expiracionOkr;
    }

    public void setExpiracionOkr(LocalDate expiracionOkr) {
        this.expiracionOkr = expiracionOkr;
    }
}
