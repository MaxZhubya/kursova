package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class AreaEditDTO {

    @JsonProperty("areaId")
    private Long idArea;

    @JsonProperty("teamOfAreaBossId")
    private Long idTeamOfAreaBoss;

    @JsonProperty("brigadeIds")
    @NotNull
    private List<Long> brigadeIdList = new ArrayList<>();

    @JsonProperty("productIds")
    @NotNull
    private List<Long> productIdList = new ArrayList<>();

    @JsonProperty("workshopId")
    private Long idWorkshop;

    @JsonProperty("areaDefinition")
    private String definition;

    public Long getIdArea() {
        return idArea;
    }

    public void setIdArea(Long idArea) {
        this.idArea = idArea;
    }

    public Long getIdTeamOfAreaBoss() {
        return idTeamOfAreaBoss;
    }

    public void setIdTeamOfAreaBoss(Long idTeamOfAreaBoss) {
        this.idTeamOfAreaBoss = idTeamOfAreaBoss;
    }

    public List<Long> getBrigadeIdList() {
        return brigadeIdList;
    }

    public void setBrigadeIdList(List<Long> brigadeIdList) {
        this.brigadeIdList = brigadeIdList;
    }

    public List<Long> getProductIdList() {
        return productIdList;
    }

    public void setProductIdList(List<Long> productIdList) {
        this.productIdList = productIdList;
    }

    public Long getIdWorkshop() {
        return idWorkshop;
    }

    public void setIdWorkshop(Long idWorkshop) {
        this.idWorkshop = idWorkshop;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }
}
