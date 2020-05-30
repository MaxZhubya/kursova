package univ.max.kursova.view;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import univ.max.kursova.dto.TeamOfAreaBossDTO;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.enums.TechPersonalType;

import java.time.LocalDateTime;

public class TechnicalPersonalView {

    @JsonView(TechnicalPersonalView.class)
    private Long idTechPersonal;

    @JsonView(TeamOfAreaBossView.class)
    private TeamOfAreaBoss teamOfAreaBoss;

    @JsonView(TechnicalPersonalView.class)
    private String personalName;

    @JsonView(TechnicalPersonalView.class)
    private TechPersonalType personalType;

    @JsonView(TechnicalPersonalView.class)
    private LocalDateTime dateCreated;

    @JsonView(TechnicalPersonalView.class)
    private LocalDateTime dateModified;

    @JsonView(TechnicalPersonalView.class)
    private String description;

    public Long getIdTechPersonal() {
        return idTechPersonal;
    }

    public TechnicalPersonalView setIdTechPersonal(Long idTechPersonal) {
        this.idTechPersonal = idTechPersonal;
        return this;
    }

    public TeamOfAreaBoss getTeamOfAreaBoss() {
        return teamOfAreaBoss;
    }

    public TechnicalPersonalView setTeamOfAreaBoss(TeamOfAreaBoss teamOfAreaBoss) {
        this.teamOfAreaBoss = teamOfAreaBoss;
        return this;
    }

    public String getPersonalName() {
        return personalName;
    }

    public TechnicalPersonalView setPersonalName(String personalName) {
        this.personalName = personalName;
        return this;
    }

    public TechPersonalType getPersonalType() {
        return personalType;
    }

    public TechnicalPersonalView setPersonalType(TechPersonalType personalType) {
        this.personalType = personalType;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public TechnicalPersonalView setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public TechnicalPersonalView setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public TechnicalPersonalView setDescription(String description) {
        this.description = description;
        return this;
    }
}
