package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import javax.validation.constraints.NotNull;

public class ProductEditDTO {

    @JsonProperty("productId")
    private Long idProduct;

    @NotNull
    @JsonProperty("category")
    private ProductCategory category;

    @NotNull
    @JsonProperty("type")
    private ProductType type;

    @JsonProperty("areaId")
    private Long idArea;

    @JsonProperty("laboratoryId")
    private Long idLaboratory;

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public Long getIdArea() {
        return idArea;
    }

    public void setIdArea(Long idArea) {
        this.idArea = idArea;
    }

    public Long getIdLaboratory() {
        return idLaboratory;
    }

    public void setIdLaboratory(Long idLaboratory) {
        this.idLaboratory = idLaboratory;
    }

    public ProductCategory getCategory() {
        return category;
    }

    public void setCategory(ProductCategory category) {
        this.category = category;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

}
