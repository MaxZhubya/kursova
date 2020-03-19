package univ.max.kursova.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

public class Brigade {
    private Long idBrigade;
    private Worker brigadier;
    private List<Worker> workerList;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Brigade() {
    }

    public Long getIdBrigade() {
        return idBrigade;
    }

    public void setIdBrigade(Long idBrigade) {
        this.idBrigade = idBrigade;
    }

    public Worker getBrigadier() {
        return brigadier;
    }

    public void setBrigadier(Worker brigadier) {
        this.brigadier = brigadier;
    }

    public List<Worker> getWorkerList() {
        return workerList;
    }

    public void setWorkerList(List<Worker> workerList) {
        this.workerList = workerList;
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
        Brigade brigade = (Brigade) o;
        return getIdBrigade() == brigade.getIdBrigade();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdBrigade());
    }
}
