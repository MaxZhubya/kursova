package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class TeamOfAreaBossEditDTO {

    @JsonProperty("teamId")
    private Long idTeam;

    @NotNull
    @JsonProperty("technicalPersonalIds")
    private List<Long> technicalPersonalIdList = new ArrayList<>();

    @JsonProperty("areaId")
    private Long idArea;

    public Long getIdTeam() {
        return idTeam;
    }

    public void setIdTeam(Long idTeam) {
        this.idTeam = idTeam;
    }

    public List<Long> getTechnicalPersonalIdList() {
        return technicalPersonalIdList;
    }

    public void setTechnicalPersonalIdList(List<Long> technicalPersonalIdList) {
        this.technicalPersonalIdList = technicalPersonalIdList;
    }

    public Long getIdArea() {
        return idArea;
    }

    public void setIdArea(Long idArea) {
        this.idArea = idArea;
    }
}
