package univ.max.kursova.model;

import java.time.LocalDateTime;
import java.util.Objects;

public class EquipmentForLaboratory {
    private long id_equipmentForLab;
    private String definition;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public EquipmentForLaboratory() {
    }

    public long getId_equipmentForLab() {
        return id_equipmentForLab;
    }

    public void setId_equipmentForLab(long id_equipmentForLab) {
        this.id_equipmentForLab = id_equipmentForLab;
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
        EquipmentForLaboratory that = (EquipmentForLaboratory) o;
        return getId_equipmentForLab() == that.getId_equipmentForLab();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_equipmentForLab());
    }
}
