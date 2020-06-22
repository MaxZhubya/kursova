package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class WorkshopEditDTO {

    @JsonProperty("workshopId")
    private Long idWorkshop;

    @JsonProperty("definition")
    private String definition;

    @NotNull
    @JsonProperty("areaIds")
    private List<Long> areaIdList = new ArrayList<>();

    @NotNull
    @JsonProperty("laboratoryIds")
    private List<Long> laboratoryIdList = new ArrayList<>();

    public Long getIdWorkshop() {
        return idWorkshop;
    }

    public void setIdWorkshop(Long idWorkshop) {
        this.idWorkshop = idWorkshop;
    }

    public List<Long> getAreaIdList() {
        return areaIdList;
    }

    public void setAreaIdList(List<Long> areaIdList) {
        this.areaIdList = areaIdList;
    }

    public List<Long> getLaboratoryIdList() {
        return laboratoryIdList;
    }

    public void setLaboratoryIdList(List<Long> laboratoryIdList) {
        this.laboratoryIdList = laboratoryIdList;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

}
