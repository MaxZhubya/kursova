package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.model.enums.PersonalType;

import java.time.LocalDateTime;
import java.util.Objects;

@Document
public class Worker {
    @Id
    private Long idWorker;

    private String workerName;
    private PersonalType workerType;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Worker() {
    }

    public Worker(Long idWorker, String workerName, PersonalType workerType,
                  LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idWorker = idWorker;
        this.workerName = workerName;
        this.workerType = workerType;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdWorker() {
        return idWorker;
    }

    public void setIdWorker(Long idWorker) {
        this.idWorker = idWorker;
    }

    public String getWorkerName() {
        return workerName;
    }

    public void setWorkerName(String workerName) {
        this.workerName = workerName;
    }

    public PersonalType getWorkerType() {
        return workerType;
    }

    public void setWorkerType(PersonalType workerType) {
        this.workerType = workerType;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public void setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
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
