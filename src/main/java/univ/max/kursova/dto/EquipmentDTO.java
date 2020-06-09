package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import univ.max.kursova.model.Equipment;
import univ.max.kursova.model.enums.EquipmentType;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class EquipmentDTO {

    private Long idEquipment;

    @JsonInclude(NON_EMPTY)
    private LaboratoryDTO laboratory;

    @JsonInclude(NON_EMPTY)
    private EquipmentType equipmentType;

    @JsonInclude(NON_NULL)
    private String definition;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;

    public Long getIdEquipment() {
        return idEquipment;
    }

    public EquipmentDTO setIdEquipment(Long idEquipment) {
        this.idEquipment = idEquipment;
        return this;
    }

    public LaboratoryDTO getLaboratory() {
        return laboratory;
    }

    public EquipmentDTO setLaboratory(LaboratoryDTO laboratory) {
        this.laboratory = laboratory;
        return this;
    }

    public EquipmentType getEquipmentType() {
        return equipmentType;
    }

    public EquipmentDTO setEquipmentType(EquipmentType equipmentType) {
        this.equipmentType = equipmentType;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public EquipmentDTO setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public EquipmentDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public EquipmentDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static EquipmentDTO makeDTO(Equipment equipment) {
        return new EquipmentDTO()
                .setIdEquipment(equipment.getIdEquipmentForLab())
                .setLaboratory(LaboratoryDTO.makeSimpleDTO(equipment.getLaboratory()))
                .setEquipmentType(equipment.getEquipmentType())
                .setDefinition(equipment.getDefinition())
                .setDateCreated(equipment.getDateCreated())
                .setDateModified(equipment.getDateModified());
    }

    public static EquipmentDTO makeSimpleDTO(Equipment equipment) {
        return (equipment != null) ? new EquipmentDTO()
                .setIdEquipment(equipment.getIdEquipmentForLab())
                .setEquipmentType(equipment.getEquipmentType())
                .setDefinition(equipment.getDefinition())
                .setDateCreated(equipment.getDateCreated())
                .setDateModified(equipment.getDateModified()) : null;
    }
}

