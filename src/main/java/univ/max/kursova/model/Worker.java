package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import univ.max.kursova.dto.WorkerDTO;
import univ.max.kursova.model.enums.WorkerType;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "workers")
public class Worker {

    private static final long serialVersionUID = -9087956734367787L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idWorker;

    @ManyToOne
    @JoinColumn(name = "brigade_id", referencedColumnName = "id")
    private Brigade brigade;

    @NotEmpty
    @Column(name = "name")
    private String workerName;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private WorkerType workerType;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
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

    public static Worker makeEntity(WorkerDTO workerDTO) {
        return new Worker()
                .setWorkerName(workerDTO.getWorkerName())
                .setWorkerType(workerDTO.getWorkerType())
                .setDateCreated(workerDTO.getDateCreated())
                .setDateModified(workerDTO.getDateModified());
    }
}
