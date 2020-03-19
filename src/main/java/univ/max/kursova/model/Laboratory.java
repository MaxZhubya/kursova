package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Document
public class Laboratory {
    @Id
    private Long idLaboratory;

    private String definition;
    private List<EquipmentForLaboratory> equipmentForLaboratoryList;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Laboratory() {
    }

    public Laboratory(Long idLaboratory, String definition, List<EquipmentForLaboratory> equipmentForLaboratoryList,
                      LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idLaboratory = idLaboratory;
        this.definition = definition;
        this.equipmentForLaboratoryList = equipmentForLaboratoryList;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdLaboratory() {
        return idLaboratory;
    }

    public void setIdLaboratory(Long idLaboratory) {
        this.idLaboratory = idLaboratory;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public List<EquipmentForLaboratory> getEquipmentForLaboratoryList() {
        return equipmentForLaboratoryList;
    }

    public void setEquipmentForLaboratoryList(List<EquipmentForLaboratory> equipmentForLaboratoryList) {
        this.equipmentForLaboratoryList = equipmentForLaboratoryList;
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
        Laboratory that = (Laboratory) o;
        return getIdLaboratory() == that.getIdLaboratory();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdLaboratory());
    }
}
