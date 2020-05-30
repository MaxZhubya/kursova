package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.model.enums.TechPersonalType;

import java.time.LocalDateTime;
import java.util.Objects;

@Document(collection = "technical_personals")
public class TechnicalPersonal {

    @Transient
    public static final String SEQUENCE_NAME = "technical_personals_sequence";

    @Id
    private Long idTechPersonal;

    @DBRef
    private TeamOfAreaBoss teamOfAreaBoss;

    private String personalName;
    private TechPersonalType personalType;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;
    private String description;

    public TechnicalPersonal() {
    }

    public TechnicalPersonal(Long id_tech_personal, String personalName, TechPersonalType personalType,
                             LocalDateTime dateCreated, LocalDateTime dateModified, String description) {
        this.idTechPersonal = id_tech_personal;
        this.personalName = personalName;
        this.personalType = personalType;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
        this.description = description;
    }

    public Long getIdTechPersonal() {
        return idTechPersonal;
    }

    public TechnicalPersonal setIdTechPersonal(Long idTechPersonal) {
        this.idTechPersonal = idTechPersonal;
        return this;
    }

    public TeamOfAreaBoss getTeamOfAreaBoss() {
        return teamOfAreaBoss;
    }

    public TechnicalPersonal setTeamOfAreaBoss(TeamOfAreaBoss teamOfAreaBoss) {
        this.teamOfAreaBoss = teamOfAreaBoss;
        return this;
    }

    public String getPersonalName() {
        return personalName;
    }

    public TechnicalPersonal setPersonalName(String personalName) {
        this.personalName = personalName;
        return this;
    }

    public TechPersonalType getPersonalType() {
        return personalType;
    }

    public TechnicalPersonal setPersonalType(TechPersonalType personalType) {
        this.personalType = personalType;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public TechnicalPersonal setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public TechnicalPersonal setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public TechnicalPersonal setDescription(String description) {
        this.description = description;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TechnicalPersonal that = (TechnicalPersonal) o;
        return getIdTechPersonal() == that.getIdTechPersonal();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdTechPersonal());
    }

    public static TechnicalPersonal makeEntity(TechnicalPersonalDTO technicalPersonalDTO) {
        return new TechnicalPersonal()
                .setPersonalName(technicalPersonalDTO.getPersonalName())
                .setPersonalType(technicalPersonalDTO.getPersonalType())
                .setDescription(technicalPersonalDTO.getDescription())
                .setDateCreated(technicalPersonalDTO.getDateCreated())
                .setDateModified(technicalPersonalDTO.getDateModified());
    }
}
