package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.mongodb.core.mapping.DBRef;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.view.Views;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class LaboratoryDTO {


    private Long idLaboratory;

    @JsonInclude(NON_EMPTY)
    private List<EquipmentForLaboratoryDTO> equipmentForLaboratoryList = new ArrayList<>();

    @JsonInclude(NON_EMPTY)
    private List<ProductDTO> productList = new ArrayList<>();

    @JsonInclude(NON_EMPTY)
    private List<WorkshopDTO> workshopList = new ArrayList<>();

    @JsonInclude(NON_NULL)
    private String definition;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;



    public Long getIdLaboratory() {
        return idLaboratory;
    }

    public LaboratoryDTO setIdLaboratory(Long idLaboratory) {
        this.idLaboratory = idLaboratory;
        return this;
    }

    public List<EquipmentForLaboratoryDTO> getEquipmentForLaboratoryList() {
        return equipmentForLaboratoryList;
    }

    public LaboratoryDTO setEquipmentForLaboratoryList(List<EquipmentForLaboratoryDTO> equipmentForLaboratoryList) {
        this.equipmentForLaboratoryList = equipmentForLaboratoryList;
        return this;
    }

    public List<ProductDTO> getProductList() {
        return productList;
    }

    public LaboratoryDTO setProductList(List<ProductDTO> productList) {
        this.productList = productList;
        return this;
    }

    public List<WorkshopDTO> getWorkshopList() {
        return workshopList;
    }

    public LaboratoryDTO setWorkshopList(List<WorkshopDTO> workshopList) {
        this.workshopList = workshopList;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public LaboratoryDTO setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public LaboratoryDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public LaboratoryDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static LaboratoryDTO makeDTO(Laboratory laboratory) {
        return new LaboratoryDTO()
                .setIdLaboratory(laboratory.getIdLaboratory())

                .setEquipmentForLaboratoryList(laboratory.getEquipmentForLaboratoryList().stream()
                    .map(EquipmentForLaboratoryDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setProductList(laboratory.getProductList().stream()
                    .map(ProductDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setWorkshopList(laboratory.getWorkshopList().stream()
                    .map(WorkshopDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setDefinition(laboratory.getDefinition())
                .setDateCreated(laboratory.getDateCreated())
                .setDateModified(laboratory.getDateModified());
    }

    public static LaboratoryDTO makeSimpleDTO(Laboratory laboratory) {
        return (laboratory != null) ? new LaboratoryDTO()
                .setIdLaboratory(laboratory.getIdLaboratory())
                .setDefinition(laboratory.getDefinition())
                .setDateCreated(laboratory.getDateCreated())
                .setDateModified(laboratory.getDateModified()) : null;
    }
}
