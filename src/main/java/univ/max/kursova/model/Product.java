package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import java.time.LocalDateTime;
import java.util.Objects;

@Document
public class Product {
    @Id
    private Long idProduct;

    private ProductCategory category;
    private ProductType type;
    private Area currentArea;
    private Laboratory currentLaboratory;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Product() {
    }

    public Product(Long idProduct, ProductCategory category, ProductType type, Area currentArea,
                   Laboratory currentLaboratory, LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idProduct = idProduct;
        this.category = category;
        this.type = type;
        this.currentArea = currentArea;
        this.currentLaboratory = currentLaboratory;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
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

    public Area getCurrentArea() {
        return currentArea;
    }

    public void setCurrentArea(Area currentArea) {
        this.currentArea = currentArea;
    }

    public Laboratory getCurrentLaboratory() {
        return currentLaboratory;
    }

    public void setCurrentLaboratory(Laboratory currentLaboratory) {
        this.currentLaboratory = currentLaboratory;
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
        Product product = (Product) o;
        return getIdProduct() == product.getIdProduct();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdProduct());
    }
}
