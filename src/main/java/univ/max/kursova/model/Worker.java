package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.model.enums.WorkerType;

import java.time.LocalDateTime;
import java.util.Objects;

@Document(collection = "workers")
public class Worker {

    @Transient
    public static final String SEQUENCE_NAME = "workers_sequence";

    @Id
    private Long idWorker;

    @DBRef
    private Brigade brigade;

    private String workerName;
    private WorkerType workerType;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Worker() {
    }

    public Worker(Long idWorker, Brigade brigade, String workerName, WorkerType workerType,
                  LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idWorker = idWorker;
        this.brigade = brigade;
        this.workerName = workerName;
        this.workerType = workerType;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdWorker() {
        return idWorker;
    }

    public Worker setIdWorker(Long idWorker) {
        this.idWorker = idWorker;
        return this;
    }

    public Brigade getBrigade() {
        return brigade;
    }

    public Worker setBrigade(Brigade brigade) {
        this.brigade = brigade;
        return this;
    }

    public String getWorkerName() {
        return workerName;
    }

    public Worker setWorkerName(String workerName) {
        this.workerName = workerName;
        return this;
    }

    public WorkerType getWorkerType() {
        return workerType;
    }

    public Worker setWorkerType(WorkerType workerType) {
        this.workerType = workerType;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public Worker setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public Worker setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Worker worker = (Worker) o;
        return getIdWorker() == worker.getIdWorker();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdWorker());
    }
}
