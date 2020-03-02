package univ.max.kursova.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

public class TeamOfAreaBoss {
    private long id_team;
    private TechnicalPersonal boss;
    private List<TechnicalPersonal> technicalPersonalList;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public TeamOfAreaBoss() {
    }

    public long getId_team() {
        return id_team;
    }

    public void setId_team(long id_team) {
        this.id_team = id_team;
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
        return getId_team() == that.getId_team();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_team());
    }
}
