package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class BrigadeEditDTO {

    @JsonProperty("brigadeId")
    private Long idBrigade;

    @JsonProperty("areaId")
    private Long idArea;

    @NotNull
    @JsonProperty("workerIds")
    private List<Long> workerIdList = new ArrayList<>();

    public Long getIdBrigade() {
        return idBrigade;
    }

    public void setIdBrigade(Long idBrigade) {
        this.idBrigade = idBrigade;
    }

    public List<Long> getWorkerIdList() {
        return workerIdList;
    }

    public void setWorkerIdList(List<Long> workerIdList) {
        this.workerIdList = workerIdList;
    }

    public Long getIdArea() {
        return idArea;
    }

    public void setIdArea(Long idArea) {
        this.idArea = idArea;
    }
}
