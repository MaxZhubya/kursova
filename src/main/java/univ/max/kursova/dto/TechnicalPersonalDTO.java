package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class TechnicalPersonalDTO {

    private Long idTechPersonal;

    @JsonInclude(NON_EMPTY)
    private TeamOfAreaBossDTO teamOfAreaBoss;

    @JsonInclude(NON_NULL)
    private String personalName;

    @JsonInclude(NON_EMPTY)
    private TechPersonalType personalType;

    @JsonInclude(NON_NULL)
    private String description;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;



    public Long getIdTechPersonal() {
        return idTechPersonal;
    }

    public TechnicalPersonalDTO setIdTechPersonal(Long idTechPersonal) {
        this.idTechPersonal = idTechPersonal;
        return this;
    }

    public TeamOfAreaBossDTO getTeamOfAreaBoss() {
        return teamOfAreaBoss;
    }

    public TechnicalPersonalDTO setTeamOfAreaBoss(TeamOfAreaBossDTO teamOfAreaBoss) {
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
                .setTeamOfAreaBoss(TeamOfAreaBossDTO.makeSimpleDTO(technicalPersonal.getTeamOfAreaBoss()))
                .setPersonalName(technicalPersonal.getPersonalName())
                .setPersonalType(technicalPersonal.getPersonalType())
                .setDescription(technicalPersonal.getDescription())
                .setDateCreated(technicalPersonal.getDateCreated())
                .setDateModified(technicalPersonal.getDateModified());
    }

    public static TechnicalPersonalDTO makeSimpleDTO(TechnicalPersonal technicalPersonal) {
        return (technicalPersonal != null) ? new TechnicalPersonalDTO()
                .setIdTechPersonal(technicalPersonal.getIdTechPersonal())
                .setPersonalName(technicalPersonal.getPersonalName())
                .setPersonalType(technicalPersonal.getPersonalType())
                .setDescription(technicalPersonal.getDescription())
                .setDateCreated(technicalPersonal.getDateCreated())
                .setDateModified(technicalPersonal.getDateModified()) : null;
    }
}
