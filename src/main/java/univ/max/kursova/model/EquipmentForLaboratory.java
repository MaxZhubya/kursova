package univ.max.kursova.model;

import java.time.LocalDateTime;
import java.util.Objects;

public class EquipmentForLaboratory {
    private Long idEquipmentForLab;
    private String definition;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public EquipmentForLaboratory() {
    }

    public Long getIdEquipmentForLab() {
        return idEquipmentForLab;
    }

    public void setIdEquipmentForLab(Long idEquipmentForLab) {
        this.idEquipmentForLab = idEquipmentForLab;
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
        return getIdEquipmentForLab() == that.getIdEquipmentForLab();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdEquipmentForLab());
    }
}
