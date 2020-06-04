package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.enums.WorkerType;
import univ.max.kursova.view.Views;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class WorkerDTO {


    private Long idWorker;

    @JsonInclude(NON_EMPTY)
    private BrigadeDTO brigade;

    @JsonInclude(NON_NULL)
    private String workerName;

    @JsonInclude(NON_EMPTY)
    private WorkerType workerType;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;



    public Long getIdWorker() {
        return idWorker;
    }

    public WorkerDTO setIdWorker(Long idWorker) {
        this.idWorker = idWorker;
        return this;
    }

    public BrigadeDTO getBrigade() {
        return brigade;
    }

    public WorkerDTO setBrigade(BrigadeDTO brigade) {
        this.brigade = brigade;
        return this;
    }

    public String getWorkerName() {
        return workerName;
    }

    public WorkerDTO setWorkerName(String workerName) {
        this.workerName = workerName;
        return this;
    }

    public WorkerType getWorkerType() {
        return workerType;
    }

    public WorkerDTO setWorkerType(WorkerType workerType) {
        this.workerType = workerType;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public WorkerDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public WorkerDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static WorkerDTO makeDTO(Worker worker) {
        return new WorkerDTO()
                .setIdWorker(worker.getIdWorker())
                .setBrigade(BrigadeDTO.makeSimpleDTO(worker.getBrigade()))
                .setWorkerName(worker.getWorkerName())
                .setWorkerType(worker.getWorkerType())
                .setDateCreated(worker.getDateCreated())
                .setDateModified(worker.getDateModified());
    }

    public static WorkerDTO makeSimpleDTO(Worker worker) {
        return (worker != null) ? new WorkerDTO()
                .setIdWorker(worker.getIdWorker())
                .setWorkerName(worker.getWorkerName())
                .setWorkerType(worker.getWorkerType())
                .setDateCreated(worker.getDateCreated())
                .setDateModified(worker.getDateModified()) : null;
    }
}
