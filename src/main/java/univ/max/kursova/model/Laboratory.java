package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import univ.max.kursova.dto.LaboratoryDTO;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "laboratories")
public class Laboratory {

    private static final long serialVersionUID = -4567545411345799L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idLaboratory;

    @NotNull
    @OneToMany(mappedBy = "laboratory")
    private List<EquipmentForLaboratory> equipmentForLaboratoryList = new ArrayList<>();

    @NotNull
    @OneToMany(mappedBy = "currentLaboratory")
    private List<Product> productList = new ArrayList<>();

    @NotNull
    @ManyToMany(mappedBy = "laboratoryList")
    private List<Workshop> workshopList = new ArrayList<>();

    @Column(name = "definition")
    private String definition;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
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
