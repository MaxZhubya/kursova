package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Document(collection = "workshops")
public class Workshop {

    @Transient
    public static final String SEQUENCE_NAME = "workshops_sequence";

    @Id
    private Long idWorkshop;

    @DBRef
    private List<Area> areaList;

    @DBRef(lazy = true)
    private List<Laboratory> laboratoryList = new ArrayList<>();

    private String definition;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Workshop() {
    }

    public Workshop(Long idWorkshop, List<Area> areaList, List<Laboratory> laboratoryList, String definition,
                    LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idWorkshop = idWorkshop;
        this.areaList = areaList;
        this.laboratoryList = laboratoryList;
        this.definition = definition;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdWorkshop() {
        return idWorkshop;
    }

    public Workshop setIdWorkshop(Long idWorkshop) {
        this.idWorkshop = idWorkshop;
        return this;
    }

    public List<Area> getAreaList() {
        return areaList;
    }

    public Workshop setAreaList(List<Area> areaList) {
        this.areaList = areaList;
        return this;
    }

    public List<Laboratory> getLaboratoryList() {
        return laboratoryList;
    }

    public Workshop setLaboratoryList(List<Laboratory> laboratoryList) {
        this.laboratoryList = laboratoryList;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public Workshop setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public Workshop setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public Workshop setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Workshop workshop = (Workshop) o;
        return getIdWorkshop() == workshop.getIdWorkshop();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdWorkshop());
    }
}
