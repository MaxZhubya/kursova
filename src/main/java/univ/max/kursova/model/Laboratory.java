package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.dto.LaboratoryDTO;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Document(collection = "laboratories")
public class Laboratory {

    @Transient
    public static final String SEQUENCE_NAME = "laboratories_sequence";

    @Id
    private Long idLaboratory;

    @DBRef
    private List<EquipmentForLaboratory> equipmentForLaboratoryList = new ArrayList<>();

    @DBRef
    private List<Product> productList = new ArrayList<>();

    @DBRef(lazy = true)
    private List<Workshop> workshopList = new ArrayList<>();

    private String definition;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Laboratory() {
    }

    public Laboratory(Long idLaboratory, String definition, List<EquipmentForLaboratory> equipmentForLaboratoryList,
                      LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idLaboratory = idLaboratory;
        this.definition = definition;
        //this.equipmentForLaboratoryList = equipmentForLaboratoryList;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdLaboratory() {
        return idLaboratory;
    }

    public Laboratory setIdLaboratory(Long idLaboratory) {
        this.idLaboratory = idLaboratory;
        return this;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public Laboratory setProductList(List<Product> productList) {
        this.productList = productList;
        return this;
    }

    public List<Workshop> getWorkshopList() {
        return workshopList;
    }

    public Laboratory setWorkshopList(List<Workshop> workshopList) {
        this.workshopList = workshopList;
        return this;
    }

    public String getDefinition() {
        return definition;
    }

    public Laboratory setDefinition(String definition) {
        this.definition = definition;
        return this;
    }

    public List<EquipmentForLaboratory> getEquipmentForLaboratoryList() {
        return equipmentForLaboratoryList;
    }

    public Laboratory setEquipmentForLaboratoryList(List<EquipmentForLaboratory> equipmentForLaboratoryList) {
        this.equipmentForLaboratoryList = equipmentForLaboratoryList;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public Laboratory setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public Laboratory setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Laboratory that = (Laboratory) o;
        return getIdLaboratory() == that.getIdLaboratory();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdLaboratory());
    }

    public static Laboratory makeEntity(LaboratoryDTO laboratoryDTO) {
        return new Laboratory()
                .setDefinition(laboratoryDTO.getDefinition())
                .setDateCreated(laboratoryDTO.getDateCreated())
                .setDateModified(laboratoryDTO.getDateModified());
    }
}
