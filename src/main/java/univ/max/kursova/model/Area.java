package univ.max.kursova.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.dto.AreaDTO;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Document(collection = "areas")
public class Area {

    @Transient
    public static final String SEQUENCE_NAME = "areas_sequence";

    @Id
    private Long idArea;

    @DBRef
    private TeamOfAreaBoss teamOfAreaBoss;

    @DBRef
    private List<Brigade> brigadeList;

    @DBRef
    private List<Product> productList;

    @DBRef
    private Workshop workshop;

    private String definition;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Area() {
    }

    public Area(Long idArea, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, String definition,
                LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idArea = idArea;
        this.teamOfAreaBoss = teamOfAreaBoss;
        this.brigadeList = brigadeList;
        this.definition = definition;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdArea() {
        return idArea;
    }

    public Area setIdArea(Long idArea) {
        this.idArea = idArea;
        return this;
    }

    public TeamOfAreaBoss getTeamOfAreaBoss() {
        return teamOfAreaBoss;
    }

    public Area setTeamOfAreaBoss(TeamOfAreaBoss teamOfAreaBoss) {
        this.teamOfAreaBoss = teamOfAreaBoss;
        return this;
    }

    public List<Brigade> getBrigadeList() {
        return brigadeList;
    }

    public Area setBrigadeList(List<Brigade> brigadeList) {
        this.brigadeList = brigadeList;
        return this;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public Area setProductList(List<Product> productList) {
        this.productList = productList;
        return this;
    }

    public Workshop getWorkshop() {
        return workshop;
    }

    public Area setWorkshop(Workshop workshop) {
        this.workshop = workshop;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public Area setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public Area setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public Area setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Area area = (Area) o;
        return getIdArea() == area.getIdArea();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdArea());
    }

    public static Area makeEntity(AreaDTO areaDTO) {
        return new Area()
                .setDefinition(areaDTO.getDefinition())
                .setDateCreated(areaDTO.getDateCreated())
                .setDateModified(areaDTO.getDateModified());
    }
}
