package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import univ.max.kursova.model.enums.EquipmentType;

import javax.validation.constraints.NotNull;

public class EquipmentEditDTO {

    @JsonProperty("equipmentId")
    private Long idEquipment;

    @NotNull
    @JsonProperty("equipmentType")
    private EquipmentType equipmentType;

    @JsonProperty("definition")
    private String definition;

    @JsonProperty("laboratoryId")
    private Long idLaboratory;

    public Long getIdEquipment() {
        return idEquipment;
    }

    public void setIdEquipment(Long idEquipment) {
        this.idEquipment = idEquipment;
    }

    public Long getIdLaboratory() {
        return idLaboratory;
    }

    public void setIdLaboratory(Long idLaboratory) {
        this.idLaboratory = idLaboratory;
    }

    public EquipmentType getEquipmentType() {
        return equipmentType;
    }

    public void setEquipmentType(EquipmentType equipmentType) {
        this.equipmentType = equipmentType;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }
}
