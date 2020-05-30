package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.dto.TeamOfAreaBossDTO;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Document(collection = "teamsOfAreaBosses")
public class TeamOfAreaBoss {

    @Transient
    public static final String SEQUENCE_NAME = "team_of_area_boss_sequence";

    @Id
    private Long idTeam;

    @DBRef
    private List<TechnicalPersonal> technicalPersonalList;

    @DBRef
    private Area area;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public TeamOfAreaBoss() {
    }

    public TeamOfAreaBoss(Long idTeam, List<TechnicalPersonal> technicalPersonalList,
                          LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idTeam = idTeam;
        this.technicalPersonalList = technicalPersonalList;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdTeam() {
        return idTeam;
    }

    public TeamOfAreaBoss setIdTeam(Long idTeam) {
        this.idTeam = idTeam;
        return this;
    }

    public List<TechnicalPersonal> getTechnicalPersonalList() {
        return technicalPersonalList;
    }

    public TeamOfAreaBoss setTechnicalPersonalList(List<TechnicalPersonal> technicalPersonalList) {
        this.technicalPersonalList = technicalPersonalList;
        return this;
    }

    public Area getArea() {
        return area;
    }

    public TeamOfAreaBoss setArea(Area area) {
        this.area = area;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public TeamOfAreaBoss setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public TeamOfAreaBoss setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeamOfAreaBoss that = (TeamOfAreaBoss) o;
        return getIdTeam() == that.getIdTeam();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdTeam());
    }

    public static TeamOfAreaBoss makeEntity(TeamOfAreaBossDTO teamOfAreaBossDTO) {
        return new TeamOfAreaBoss()
                .setDateCreated(teamOfAreaBossDTO.getDateCreated())
                .setDateModified(teamOfAreaBossDTO.getDateModified());
    }
}
