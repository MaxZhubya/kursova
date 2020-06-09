package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import univ.max.kursova.model.enums.WorkerType;

import javax.validation.constraints.NotEmpty;

public class WorkerEditDTO {

    @JsonProperty("workerId")
    private Long idWorker;

    @JsonProperty("brigadeId")
    private BrigadeDTO idBrigade;

    @NotEmpty
    @JsonProperty("name")
    private String workerName;

    @NotEmpty
    @JsonProperty("type")
    private WorkerType workerType;

    public Long getIdWorker() {
        return idWorker;
    }

    public void setIdWorker(Long idWorker) {
        this.idWorker = idWorker;
    }

    public BrigadeDTO getIdBrigade() {
        return idBrigade;
    }

    public void setIdBrigade(BrigadeDTO idBrigade) {
        this.idBrigade = idBrigade;
    }

    public String getWorkerName() {
        return workerName;
    }

    public void setWorkerName(String workerName) {
        this.workerName = workerName;
    }

    public WorkerType getWorkerType() {
        return workerType;
    }

    public void setWorkerType(WorkerType workerType) {
        this.workerType = workerType;
    }

}
