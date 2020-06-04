package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;
import univ.max.kursova.view.Views;

import java.time.LocalDateTime;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

public class ProductDTO {


    private Long idProduct;

    @JsonInclude(NON_EMPTY)
    private AreaDTO currentArea;

    @JsonInclude(NON_EMPTY)
    private LaboratoryDTO currentLaboratory;

    @JsonInclude(NON_EMPTY)
    private ProductCategory category;

    @JsonInclude(NON_EMPTY)
    private ProductType type;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
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
                .setCurrentArea(AreaDTO.makeSimpleDTO(product.getCurrentArea()))
                .setCurrentLaboratory(LaboratoryDTO.makeSimpleDTO(product.getCurrentLaboratory()))
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
