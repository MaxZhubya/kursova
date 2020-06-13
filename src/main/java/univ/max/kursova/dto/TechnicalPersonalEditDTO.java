package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import univ.max.kursova.model.enums.TechPersonalType;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class TechnicalPersonalEditDTO {

    @JsonProperty("techPersonalId")
    private Long idTechPersonal;

    @NotEmpty
    @JsonProperty("name")
    private String personalName;

    @NotNull
    @JsonProperty("type")
    private TechPersonalType personalType;

    @JsonProperty("description")
    private String description;

    @JsonProperty("teamOfAreaBossId")
    private Long idTeamOfAreaBoss;

    public Long getIdTechPersonal() {
        return idTechPersonal;
    }

    public void setIdTechPersonal(Long idTechPersonal) {
        this.idTechPersonal = idTechPersonal;
    }

    public Long getIdTeamOfAreaBoss() {
        return idTeamOfAreaBoss;
    }

    public void setIdTeamOfAreaBoss(Long idTeamOfAreaBoss) {
        this.idTeamOfAreaBoss = idTeamOfAreaBoss;
    }

    public String getPersonalName() {
        return personalName;
    }

    public void setPersonalName(String personalName) {
        this.personalName = personalName;
    }

    public TechPersonalType getPersonalType() {
        return personalType;
    }

    public void setPersonalType(TechPersonalType personalType) {
        this.personalType = personalType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
