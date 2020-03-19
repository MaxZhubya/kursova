package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Objects;

@Document
public class EquipmentForLaboratory {
    @Id
    private Long idEquipmentForLab;

    private String definition;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public EquipmentForLaboratory() {
    }

    public EquipmentForLaboratory(Long idEquipmentForLab, String definition,
                                  LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idEquipmentForLab = idEquipmentForLab;
        this.definition = definition;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
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
