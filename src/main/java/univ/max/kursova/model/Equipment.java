package univ.max.kursova.model;

import univ.max.kursova.model.enums.EquipmentType;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "laboratory_equipments")
public class Equipment {

    private static final long serialVersionUID = -1324116876368098L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idEquipment;

    @ManyToOne
    @JoinColumn(name = "laboratory_id", referencedColumnName = "id")
    private Laboratory laboratory;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private EquipmentType equipmentType;

    @Column(name = "definition")
    private String definition;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
    private LocalDateTime dateModified;

    public Equipment() {
    }

    public Equipment(Long idEquipment, String definition,
                     LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idEquipment = idEquipment;
        this.definition = definition;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdEquipment() {
        return idEquipment;
    }

    public Equipment setIdEquipment(Long idEquipment) {
        this.idEquipment = idEquipment;
        return this;
    }

    public Laboratory getLaboratory() {
        return laboratory;
    }

    public Equipment setLaboratory(Laboratory laboratory) {
        this.laboratory = laboratory;
        return this;
    }

    public EquipmentType getEquipmentType() {
        return equipmentType;
    }

    public Equipment setEquipmentType(EquipmentType equipmentType) {
        this.equipmentType = equipmentType;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public Equipment setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public Equipment setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public Equipment setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Equipment that = (Equipment) o;
        return getIdEquipment() == that.getIdEquipment();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdEquipment());
    }

}
