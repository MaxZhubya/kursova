package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import univ.max.kursova.dto.EquipmentForLaboratoryDTO;
import univ.max.kursova.model.enums.EquipmentType;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "laboratory_equipments")
public class EquipmentForLaboratory {

    private static final long serialVersionUID = -1324116876368098L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idEquipmentForLab;

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

    public static EquipmentForLaboratory makeEntity(EquipmentForLaboratoryDTO equipmentForLaboratoryDTO) {
        return new EquipmentForLaboratory()
                .setEquipmentType(equipmentForLaboratoryDTO.getEquipmentType())
                .setDefinition(equipmentForLaboratoryDTO.getDefinition())
                .setDateCreated(equipmentForLaboratoryDTO.getDateCreated())
                .setDateModified(equipmentForLaboratoryDTO.getDateModified());
    }
}
