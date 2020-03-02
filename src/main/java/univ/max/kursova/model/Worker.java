package univ.max.kursova.model;

import univ.max.kursova.model.enums.PersonalType;

import java.time.LocalDateTime;
import java.util.Objects;

public class Worker {
    private long id_worker;
    private String workerName;
    private PersonalType workerType;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Worker() {
    }

    public long getId_worker() {
        return id_worker;
    }

    public void setId_worker(long id_worker) {
        this.id_worker = id_worker;
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
        return getId_worker() == worker.getId_worker();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_worker());
    }
}
