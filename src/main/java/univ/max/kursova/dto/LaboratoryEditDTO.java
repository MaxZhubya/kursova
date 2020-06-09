package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class LaboratoryEditDTO {

    @JsonProperty("laboratoryId")
    private Long idLaboratory;

    @NotNull
    @JsonProperty("equipmentIds")
    private List<Long> equipmentIdList = new ArrayList<>();

    @NotNull
    @JsonProperty("productIds")
    private List<Long> productIdList = new ArrayList<>();

    @NotNull
    @JsonProperty("workshopIds")
    private List<Long> workshopIdList = new ArrayList<>();

    @JsonProperty("definition")
    private String definition;

    public Long getIdLaboratory() {
        return idLaboratory;
    }

    public void setIdLaboratory(Long idLaboratory) {
        this.idLaboratory = idLaboratory;
    }

    public List<Long> getEquipmentIdList() {
        return equipmentIdList;
    }

    public void setEquipmentIdList(List<Long> equipmentIdList) {
        this.equipmentIdList = equipmentIdList;
    }

    public List<Long> getProductIdList() {
        return productIdList;
    }

    public void setProductIdList(List<Long> productIdList) {
        this.productIdList = productIdList;
    }

    public List<Long> getWorkshopIdList() {
        return workshopIdList;
    }

    public void setWorkshopIdList(List<Long> workshopIdList) {
        this.workshopIdList = workshopIdList;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

}
