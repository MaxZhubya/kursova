package univ.max.kursova.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

public class Laboratory {
    private long id_laboratory;
    private String definition;
    private List<EquipmentForLaboratory> equipmentForLaboratoryList;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Laboratory() {
    }

    public long getId_laboratory() {
        return id_laboratory;
    }

    public void setId_laboratory(long id_laboratory) {
        this.id_laboratory = id_laboratory;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public List<EquipmentForLaboratory> getEquipmentForLaboratoryList() {
        return equipmentForLaboratoryList;
    }

    public void setEquipmentForLaboratoryList(List<EquipmentForLaboratory> equipmentForLaboratoryList) {
        this.equipmentForLaboratoryList = equipmentForLaboratoryList;
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
        Laboratory that = (Laboratory) o;
        return getId_laboratory() == that.getId_laboratory();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_laboratory());
    }
}
