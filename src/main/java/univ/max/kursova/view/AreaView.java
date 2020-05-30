package univ.max.kursova.view;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import univ.max.kursova.dto.AreaDTO;
import univ.max.kursova.dto.TeamOfAreaBossDTO;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;

import java.time.LocalDateTime;
import java.util.List;

public class AreaView {

    @JsonView(AreaView.class)
    private Long idArea;

    @JsonView(AreaView.class)
    private TeamOfAreaBossDTO teamOfAreaBoss;

    @JsonView(AreaView.class)
    private List<Brigade> brigadeList;

    @JsonView(AreaView.class)
    private List<Product> productList;

    @JsonView(AreaView.class)
    private Workshop workshop;

    @JsonView(AreaView.class)
    private String definition;

    @JsonView(AreaView.class)
    private LocalDateTime dateCreated;

    @JsonView(AreaView.class)
    private LocalDateTime dateModified;


    public Long getIdArea() {
        return idArea;
    }

    public AreaView setIdArea(Long idArea) {
        this.idArea = idArea;
        return this;
    }

    public TeamOfAreaBossDTO getTeamOfAreaBoss() {
        return teamOfAreaBoss;
    }

    public AreaView setTeamOfAreaBoss(TeamOfAreaBossDTO teamOfAreaBoss) {
        this.teamOfAreaBoss = teamOfAreaBoss;
        return this;
    }

    public List<Brigade> getBrigadeList() {
        return brigadeList;
    }

    public AreaView setBrigadeList(List<Brigade> brigadeList) {
        this.brigadeList = brigadeList;
        return this;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public AreaView setProductList(List<Product> productList) {
        this.productList = productList;
        return this;
    }

    public Workshop getWorkshop() {
        return workshop;
    }

    public AreaView setWorkshop(Workshop workshop) {
        this.workshop = workshop;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public AreaView setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public AreaView setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public AreaView setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }
}
