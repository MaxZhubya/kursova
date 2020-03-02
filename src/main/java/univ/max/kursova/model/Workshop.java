package univ.max.kursova.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

public class Workshop {
    private long id_workshop;
    private String definition;
    private List<Area> areaList;
    private List<Laboratory> laboratoryList;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Workshop() {
    }

    public long getId_workshop() {
        return id_workshop;
    }

    public void setId_workshop(long id_workshop) {
        this.id_workshop = id_workshop;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public List<Area> getAreaList() {
        return areaList;
    }

    public void setAreaList(List<Area> areaList) {
        this.areaList = areaList;
    }

    public List<Laboratory> getLaboratoryList() {
        return laboratoryList;
    }

    public void setLaboratoryList(List<Laboratory> laboratoryList) {
        this.laboratoryList = laboratoryList;
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
        Workshop workshop = (Workshop) o;
        return getId_workshop() == workshop.getId_workshop();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_workshop());
    }
}
