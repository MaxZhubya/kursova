package univ.max.kursova.model;

import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.model.enums.TechPersonalType;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "technical_personals")
public class TechnicalPersonal {

    private static final long serialVersionUID = -8745670987094748L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long idTechPersonal;

    @ManyToOne()
    @JoinColumn(name = "team_of_area_boss_id", referencedColumnName = "id")
    private TeamOfAreaBoss teamOfAreaBoss;

    @NotEmpty
    @Column(name = "name")
    private String personalName;

    @NotNull
    @Enumerated (EnumType.STRING)
    @Column(name = "type")
    private TechPersonalType personalType;

    @Column(name = "definition")
    private String definition;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
    private LocalDateTime dateModified;

    public TechnicalPersonal() {
    }

    public TechnicalPersonal(Long id_tech_personal, String personalName, TechPersonalType personalType,
                             LocalDateTime dateCreated, LocalDateTime dateModified, String definition) {
        this.idTechPersonal = id_tech_personal;
        this.personalName = personalName;
        this.personalType = personalType;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
        this.definition = definition;
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

    public String getDefinition() {
        return definition;
    }

    public TechnicalPersonal setDefinition(String definition) {
        this.definition = definition;
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
                .setDefinition(technicalPersonalDTO.getDescription())
                .setDateCreated(technicalPersonalDTO.getDateCreated())
                .setDateModified(technicalPersonalDTO.getDateModified());
    }
}
