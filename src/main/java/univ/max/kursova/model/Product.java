package univ.max.kursova.model;

import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import java.time.LocalDateTime;
import java.util.Objects;

public class Product {
    private long id_product;
    private ProductCategory category;
    private ProductType type;
    private Area currentArea;
    private Laboratory currentLaboratory;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;

    public Product() {
    }

    public long getId_product() {
        return id_product;
    }

    public void setId_product(long id_product) {
        this.id_product = id_product;
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
        return getId_product() == product.getId_product();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_product());
    }
}
