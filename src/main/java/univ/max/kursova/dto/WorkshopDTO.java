package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import univ.max.kursova.model.Workshop;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class WorkshopDTO {

    private Long idWorkshop;

    @JsonInclude(NON_EMPTY)
    private List<AreaDTO> areaList = new ArrayList<>();

    @JsonInclude(NON_EMPTY)
    private List<LaboratoryDTO> laboratoryList = new ArrayList<>();

    @JsonInclude(NON_NULL)
    private String definition;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;

    public Long getIdWorkshop() {
        return idWorkshop;
    }

    public WorkshopDTO setIdWorkshop(Long idWorkshop) {
        this.idWorkshop = idWorkshop;
        return this;
    }

    public List<AreaDTO> getAreaList() {
        return areaList;
    }

    public WorkshopDTO setAreaList(List<AreaDTO> areaList) {
        this.areaList = areaList;
        return this;
    }

    public List<LaboratoryDTO> getLaboratoryList() {
        return laboratoryList;
    }

    public WorkshopDTO setLaboratoryList(List<LaboratoryDTO> laboratoryList) {
        this.laboratoryList = laboratoryList;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public WorkshopDTO setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public WorkshopDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public WorkshopDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static WorkshopDTO makeDTO(Workshop workshop) {
        return new WorkshopDTO()
                .setIdWorkshop(workshop.getIdWorkshop())

                .setAreaList(workshop.getAreaList().stream().map(AreaDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setLaboratoryList(workshop.getLaboratoryList().stream().map(LaboratoryDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setDefinition(workshop.getDefinition())
                .setDateCreated(workshop.getDateCreated())
                .setDateModified(workshop.getDateModified());
    }

    public static WorkshopDTO makeSimpleDTO(Workshop workshop) {
        return (workshop != null) ? new WorkshopDTO()
                .setIdWorkshop(workshop.getIdWorkshop())
                .setDefinition(workshop.getDefinition())
                .setDateCreated(workshop.getDateCreated())
                .setDateModified(workshop.getDateModified()) : null;
    }
}
