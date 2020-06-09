package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import univ.max.kursova.dto.TeamOfAreaBossDTO;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "teams_of_area_bosses")
public class TeamOfAreaBoss {

    private static final long serialVersionUID = -3463465374754748L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long idTeam;

    @NotNull
    @OneToMany(mappedBy = "teamOfAreaBoss")
    private List<TechnicalPersonal> technicalPersonalList = new ArrayList<>();

    @OneToOne(mappedBy = "teamOfAreaBoss")
    private Area area;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
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
