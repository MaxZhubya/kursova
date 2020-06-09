package univ.max.kursova.model;

import univ.max.kursova.dto.BrigadeDTO;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "brigades")
public class Brigade {

    private static final long serialVersionUID = -8765784653535432L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idBrigade;

    @NotNull
    @OneToMany(mappedBy = "brigade")
    private List<Worker> workerList = new ArrayList<>();

    @ManyToOne()
    @JoinColumn(name = "area_id", referencedColumnName = "id")
    private Area area;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
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

    public static Brigade makeEntity(BrigadeDTO brigadeDTO) {
        return new Brigade()
                .setDateCreated(brigadeDTO.getDateCreated())
                .setDateModified(brigadeDTO.getDateModified());
    }
}
