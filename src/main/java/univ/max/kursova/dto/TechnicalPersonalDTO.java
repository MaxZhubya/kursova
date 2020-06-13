package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@JsonPropertyOrder({"techPersonalId", "personalName", "personalType", "created", "modified", "description", "teamOfAreaBoss"})
public class TechnicalPersonalDTO {

    @JsonProperty("techPersonalId")
    private Long idTechPersonal;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("teamOfAreaBoss")
    private TeamOfAreaBossDTO teamOfAreaBoss;

    @JsonInclude(NON_NULL)
    @JsonProperty("personalName")
    private String personalName;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("personalType")
    private TechPersonalType personalType;

    @JsonInclude(NON_NULL)
    @JsonProperty("description")
    private String description;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    @JsonProperty("created")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    @JsonProperty("modified")
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
                .setDescription(technicalPersonal.getDefinition())
                .setDateCreated(technicalPersonal.getDateCreated())
                .setDateModified(technicalPersonal.getDateModified());
    }

    public static TechnicalPersonalDTO makeSimpleDTO(TechnicalPersonal technicalPersonal) {
        return (technicalPersonal != null) ? new TechnicalPersonalDTO()
                .setIdTechPersonal(technicalPersonal.getIdTechPersonal())
                .setPersonalName(technicalPersonal.getPersonalName())
                .setPersonalType(technicalPersonal.getPersonalType())
                .setDescription(technicalPersonal.getDefinition())
                .setDateCreated(technicalPersonal.getDateCreated())
                .setDateModified(technicalPersonal.getDateModified()) : null;
    }
}
