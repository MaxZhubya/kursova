package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;

import java.time.LocalDateTime;

public class TechnicalPersonalDTO {

    private Long idTechPersonal;
    @JsonIgnore
    private TeamOfAreaBoss teamOfAreaBoss;
    private String personalName;
    private TechPersonalType personalType;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;
    private String description;

    public Long getIdTechPersonal() {
        return idTechPersonal;
    }

    public TechnicalPersonalDTO setIdTechPersonal(Long idTechPersonal) {
        this.idTechPersonal = idTechPersonal;
        return this;
    }

    public TeamOfAreaBoss getTeamOfAreaBoss() {
        return teamOfAreaBoss;
    }

    public TechnicalPersonalDTO setTeamOfAreaBoss(TeamOfAreaBoss teamOfAreaBoss) {
        this.teamOfAreaBoss = teamOfAreaBoss;
        return this;
    }

    public String getPersonalName() {
        return personalName;
    }

    public TechnicalPersonalDTO setPersonalName(String personalName) {
        this.personalName = personalName;
        return this;
    }

    public TechPersonalType getPersonalType() {
        return personalType;
    }

    public TechnicalPersonalDTO setPersonalType(TechPersonalType personalType) {
        this.personalType = personalType;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public TechnicalPersonalDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public TechnicalPersonalDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public TechnicalPersonalDTO setDescription(String description) {
        this.description = description;
        return this;
    }

    public static TechnicalPersonalDTO makeDTO(TechnicalPersonal technicalPersonal) {
        return new TechnicalPersonalDTO()
                .setIdTechPersonal(technicalPersonal.getIdTechPersonal())
                .setPersonalName(technicalPersonal.getPersonalName())
                .setPersonalType(technicalPersonal.getPersonalType())
                .setDescription(technicalPersonal.getDescription())
                .setDateCreated(technicalPersonal.getDateCreated())
                .setDateModified(technicalPersonal.getDateModified());
                //.setTeamOfAreaBoss(technicalPersonal.getTeamOfAreaBoss());
    }
}
