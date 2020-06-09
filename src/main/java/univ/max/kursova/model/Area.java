package univ.max.kursova.model;

import univ.max.kursova.dto.AreaDTO;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "areas")
public class Area implements Serializable {

    private static final long serialVersionUID = -8748906876368098L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long idArea;

    @OneToOne()
    @JoinColumn(name = "team_of_area_boss_id", referencedColumnName = "id")
    private TeamOfAreaBoss teamOfAreaBoss;

    @NotNull
    @OneToMany(mappedBy = "area")
    private List<Brigade> brigadeList = new ArrayList<>();

    @NotNull
    @OneToMany(mappedBy = "area")
    private List<Product> productList = new ArrayList<>();

    @ManyToOne()
    @JoinColumn(name = "workshop_id", referencedColumnName = "id")
    private Workshop workshop;

    @Column(name = "definition")
    private String definition;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
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
