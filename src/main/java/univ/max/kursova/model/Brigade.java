package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Document(collection = "brigades")
public class Brigade {

    @Transient
    public static final String SEQUENCE_NAME = "brigades_sequence";

    @Id
    private Long idBrigade;

    @DBRef
    private List<Worker> workerList;

    @DBRef
    private Area area;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Brigade() {
    }

    public Brigade(Long idBrigade, List<Worker> workerList,
                   LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idBrigade = idBrigade;
        this.workerList = workerList;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdBrigade() {
        return idBrigade;
    }

    public Brigade setIdBrigade(Long idBrigade) {
        this.idBrigade = idBrigade;
        return this;
    }

    public List<Worker> getWorkerList() {
        return workerList;
    }

    public Brigade setWorkerList(List<Worker> workerList) {
        this.workerList = workerList;
        return this;
    }

    public Area getArea() {
        return area;
    }

    public Brigade setArea(Area area) {
        this.area = area;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public Brigade setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public Brigade setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
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
