package univ.max.kursova.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

public class Area {
    private Long idArea;
    private List<TeamOfAreaBoss> teamOfAreaBossList;
    private String definition;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Area() {
    }

    public Long getIdArea() {
        return idArea;
    }

    public void setIdArea(Long idArea) {
        this.idArea = idArea;
    }

    public List<TeamOfAreaBoss> getTeamOfAreaBossList() {
        return teamOfAreaBossList;
    }

    public void setTeamOfAreaBossList(List<TeamOfAreaBoss> teamOfAreaBossList) {
        this.teamOfAreaBossList = teamOfAreaBossList;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
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
        Area area = (Area) o;
        return getIdArea() == area.getIdArea();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdArea());
    }
}
