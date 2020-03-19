package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Document
public class TeamOfAreaBoss {
    @Id
    private Long idTeam;

    private TechnicalPersonal boss;
    private List<TechnicalPersonal> technicalPersonalList;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public TeamOfAreaBoss() {
    }

    public TeamOfAreaBoss(Long idTeam, TechnicalPersonal boss, List<TechnicalPersonal> technicalPersonalList,
                          LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idTeam = idTeam;
        this.boss = boss;
        this.technicalPersonalList = technicalPersonalList;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdTeam() {
        return idTeam;
    }

    public void setIdTeam(Long idTeam) {
        this.idTeam = idTeam;
    }

    public TechnicalPersonal getBoss() {
        return boss;
    }

    public void setBoss(TechnicalPersonal boss) {
        this.boss = boss;
    }

    public List<TechnicalPersonal> getTechnicalPersonalList() {
        return technicalPersonalList;
    }

    public void setTechnicalPersonalList(List<TechnicalPersonal> technicalPersonalList) {
        this.technicalPersonalList = technicalPersonalList;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public void setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
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
}
