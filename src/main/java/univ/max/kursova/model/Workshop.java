package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Document
public class Workshop {
    @Id
    private Long idWorkshop;

    private String definition;
    private List<Area> areaList;
    private List<Laboratory> laboratoryList;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Workshop() {
    }

    public Workshop(Long idWorkshop, String definition, List<Area> areaList, List<Laboratory> laboratoryList,
                    LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idWorkshop = idWorkshop;
        this.definition = definition;
        this.areaList = areaList;
        this.laboratoryList = laboratoryList;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdWorkshop() {
        return idWorkshop;
    }

    public void setIdWorkshop(Long idWorkshop) {
        this.idWorkshop = idWorkshop;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public List<Area> getAreaList() {
        return areaList;
    }

    public void setAreaList(List<Area> areaList) {
        this.areaList = areaList;
    }

    public List<Laboratory> getLaboratoryList() {
        return laboratoryList;
    }

    public void setLaboratoryList(List<Laboratory> laboratoryList) {
        this.laboratoryList = laboratoryList;
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
        Workshop workshop = (Workshop) o;
        return getIdWorkshop() == workshop.getIdWorkshop();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdWorkshop());
    }
}
