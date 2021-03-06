package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@JsonPropertyOrder({"productId", "category", "type", "created", "modified", "area", "laboratory"})
public class ProductDTO {

    @JsonProperty("productId")
    private Long idProduct;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("area")
    private AreaDTO currentArea;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("laboratory")
    private LaboratoryDTO currentLaboratory;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("category")
    private ProductCategory category;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("type")
    private ProductType type;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    @JsonProperty("created")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    @JsonProperty("modified")
    private LocalDateTime dateModified;

    public Long getIdProduct() {
        return idProduct;
    }

    public ProductDTO setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
        return this;
    }

    public AreaDTO getCurrentArea() {
        return currentArea;
    }

    public ProductDTO setCurrentArea(AreaDTO currentArea) {
        this.currentArea = currentArea;
        return this;
    }

    public LaboratoryDTO getCurrentLaboratory() {
        return currentLaboratory;
    }

    public ProductDTO setCurrentLaboratory(LaboratoryDTO currentLaboratory) {
        this.currentLaboratory = currentLaboratory;
        return this;
    }

    public ProductCategory getCategory() {
        return category;
    }

    public ProductDTO setCategory(ProductCategory category) {
        this.category = category;
        return this;
    }

    public ProductType getType() {
        return type;
    }

    public ProductDTO setType(ProductType type) {
        this.type = type;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public ProductDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public ProductDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static ProductDTO makeDTO(Product product) {
        return new ProductDTO()
                .setIdProduct(product.getIdProduct())
                .setCurrentArea(AreaDTO.makeSimpleDTO(product.getArea()))
                .setCurrentLaboratory(LaboratoryDTO.makeSimpleDTO(product.getLaboratory()))
                .setCategory(product.getCategory())
                .setType(product.getType())
                .setDateCreated(product.getDateCreated())
                .setDateModified(product.getDateModified());
    }

    public static ProductDTO makeSimpleDTO(Product product) {
        return (product != null) ? new ProductDTO()
                .setIdProduct(product.getIdProduct())
                .setCategory(product.getCategory())
                .setType(product.getType())
                .setDateCreated(product.getDateCreated())
                .setDateModified(product.getDateModified()) : null;
    }
}
