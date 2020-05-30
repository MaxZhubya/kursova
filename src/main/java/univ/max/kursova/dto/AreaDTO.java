package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import univ.max.kursova.model.*;

import java.time.LocalDateTime;
import java.util.List;

public class AreaDTO {

    private Long idArea;
    private TeamOfAreaBossDTO teamOfAreaBoss;
    private List<Brigade> brigadeList;
    private List<Product> productList;
    private Workshop workshop;
    private String definition;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;

    public Long getIdArea() {
        return idArea;
    }

    public AreaDTO setIdArea(Long idArea) {
        this.idArea = idArea;
        return this;
    }

    public TeamOfAreaBossDTO getTeamOfAreaBoss() {
        return teamOfAreaBoss;
    }

    public AreaDTO setTeamOfAreaBoss(TeamOfAreaBossDTO teamOfAreaBoss) {
        this.teamOfAreaBoss = teamOfAreaBoss;
        return this;
    }

    public List<Brigade> getBrigadeList() {
        return brigadeList;
    }

    public AreaDTO setBrigadeList(List<Brigade> brigadeList) {
        this.brigadeList = brigadeList;
        return this;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public AreaDTO setProductList(List<Product> productList) {
        this.productList = productList;
        return this;
    }

    public Workshop getWorkshop() {
        return workshop;
    }

    public AreaDTO setWorkshop(Workshop workshop) {
        this.workshop = workshop;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public AreaDTO setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public AreaDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public AreaDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static AreaDTO makeDTO(Area area) {
        return new AreaDTO()
                .setIdArea(area.getIdArea())
                .setDefinition(area.getDefinition())
                .setDateCreated(area.getDateCreated())
                .setDateModified(area.getDateModified());
                //.setTeamOfAreaBoss(TeamOfAreaBossDTO.makeDTO(area.getTeamOfAreaBoss()));
    }

}
