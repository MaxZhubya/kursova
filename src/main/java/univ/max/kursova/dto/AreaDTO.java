package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import sun.invoke.empty.Empty;
import univ.max.kursova.model.*;
import univ.max.kursova.view.Views;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class AreaDTO {

    private Long idArea;

    @JsonInclude(NON_EMPTY)
    private TeamOfAreaBossDTO teamOfAreaBoss;

    @JsonInclude(NON_EMPTY)
    private List<BrigadeDTO> brigadeList = new ArrayList<>();

    @JsonInclude(NON_EMPTY)
    private List<ProductDTO> productList = new ArrayList<>();

    @JsonInclude(NON_EMPTY)
    private WorkshopDTO workshop;

    @JsonInclude(NON_NULL)
    private String definition;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
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

    public List<BrigadeDTO> getBrigadeList() {
        return brigadeList;
    }

    public AreaDTO setBrigadeList(List<BrigadeDTO> brigadeList) {
        this.brigadeList = brigadeList;
        return this;
    }

    public List<ProductDTO> getProductList() {
        return productList;
    }

    public AreaDTO setProductList(List<ProductDTO> productList) {
        this.productList = productList;
        return this;
    }

    public WorkshopDTO getWorkshop() {
        return workshop;
    }

    public AreaDTO setWorkshop(WorkshopDTO workshop) {
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
                .setTeamOfAreaBoss(TeamOfAreaBossDTO.makeSimpleDTO(area.getTeamOfAreaBoss()))

                .setBrigadeList(area.getBrigadeList().stream()
                        .map(BrigadeDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setProductList(area.getProductList().stream()
                        .map(ProductDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setWorkshop(WorkshopDTO.makeSimpleDTO(area.getWorkshop()))
                .setDefinition(area.getDefinition())
                .setDateCreated(area.getDateCreated())
                .setDateModified(area.getDateModified());
    }

    public static AreaDTO makeSimpleDTO(Area area) {
        return (area != null) ? new AreaDTO()
                .setIdArea(area.getIdArea())
                .setDefinition(area.getDefinition())
                .setDateCreated(area.getDateCreated())
                .setDateModified(area.getDateModified()) : null;
    }

}
