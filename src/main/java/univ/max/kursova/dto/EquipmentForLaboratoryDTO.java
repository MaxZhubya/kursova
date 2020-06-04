package univ.max.kursova.dto;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.enums.EquipmentType;
import univ.max.kursova.view.Views;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class EquipmentForLaboratoryDTO {


    private Long idEquipmentForLab;

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



    public Long getIdEquipmentForLab() {
        return idEquipmentForLab;
    }

    public EquipmentForLaboratoryDTO setIdEquipmentForLab(Long idEquipmentForLab) {
        this.idEquipmentForLab = idEquipmentForLab;
        return this;
    }

    public LaboratoryDTO getLaboratory() {
        return laboratory;
    }

    public EquipmentForLaboratoryDTO setLaboratory(LaboratoryDTO laboratory) {
        this.laboratory = laboratory;
        return this;
    }

    public EquipmentType getEquipmentType() {
        return equipmentType;
    }

    public EquipmentForLaboratoryDTO setEquipmentType(EquipmentType equipmentType) {
        this.equipmentType = equipmentType;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public EquipmentForLaboratoryDTO setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public EquipmentForLaboratoryDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public EquipmentForLaboratoryDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static EquipmentForLaboratoryDTO makeDTO(EquipmentForLaboratory equipmentForLaboratory) {
        return new EquipmentForLaboratoryDTO()
                .setIdEquipmentForLab(equipmentForLaboratory.getIdEquipmentForLab())
                .setLaboratory(LaboratoryDTO.makeSimpleDTO(equipmentForLaboratory.getLaboratory()))
                .setEquipmentType(equipmentForLaboratory.getEquipmentType())
                .setDefinition(equipmentForLaboratory.getDefinition())
                .setDateCreated(equipmentForLaboratory.getDateCreated())
                .setDateModified(equipmentForLaboratory.getDateModified());
    }

    public static EquipmentForLaboratoryDTO makeSimpleDTO(EquipmentForLaboratory equipmentForLaboratory) {
        return (equipmentForLaboratory != null) ? new EquipmentForLaboratoryDTO()
                .setIdEquipmentForLab(equipmentForLaboratory.getIdEquipmentForLab())
                .setEquipmentType(equipmentForLaboratory.getEquipmentType())
                .setDefinition(equipmentForLaboratory.getDefinition())
                .setDateCreated(equipmentForLaboratory.getDateCreated())
                .setDateModified(equipmentForLaboratory.getDateModified()) : null;
    }
}

