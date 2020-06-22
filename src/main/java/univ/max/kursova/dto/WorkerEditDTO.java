package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import univ.max.kursova.model.enums.WorkerType;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class WorkerEditDTO {

    @JsonProperty("workerId")
    private Long idWorker;

    @NotEmpty
    @JsonProperty("name")
    private String workerName;

    @NotNull
    @JsonProperty("type")
    private WorkerType workerType;

    @JsonProperty("brigadeId")
    private Long idBrigade;

    public Long getIdWorker() {
        return idWorker;
    }

    public void setIdWorker(Long idWorker) {
        this.idWorker = idWorker;
    }

    public Long getIdBrigade() {
        return idBrigade;
    }

    public void setIdBrigade(Long idBrigade) {
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
