package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.model.enums.EquipmentType;

import java.time.LocalDateTime;
import java.util.Objects;

@Document(collection = "equipmentForLaboratories")
public class EquipmentForLaboratory {

    @Transient
    public static final String SEQUENCE_NAME = "equipment_for_laboratory_sequence";

    @Id
    private Long idEquipmentForLab;

    @DBRef
    private Laboratory laboratory;

    private EquipmentType equipmentType;
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

    public EquipmentForLaboratory setIdEquipmentForLab(Long idEquipmentForLab) {
        this.idEquipmentForLab = idEquipmentForLab;
        return this;
    }

    public Laboratory getLaboratory() {
        return laboratory;
    }

    public EquipmentForLaboratory setLaboratory(Laboratory laboratory) {
        this.laboratory = laboratory;
        return this;
    }

    public EquipmentType getEquipmentType() {
        return equipmentType;
    }

    public EquipmentForLaboratory setEquipmentType(EquipmentType equipmentType) {
        this.equipmentType = equipmentType;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public EquipmentForLaboratory setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public EquipmentForLaboratory setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public EquipmentForLaboratory setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
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
