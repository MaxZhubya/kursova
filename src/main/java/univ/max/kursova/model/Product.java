package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.dto.ProductDTO;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import java.time.LocalDateTime;
import java.util.Objects;

@Document(collection = "products")
public class Product {

    @Transient
    public static final String SEQUENCE_NAME = "products_sequence";

    @Id
    private Long idProduct;

    @DBRef
    private Area currentArea;

    @DBRef
    private Laboratory currentLaboratory;

    private ProductCategory category;
    private ProductType type;

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

    public Product setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
        return this;
    }

    public ProductCategory getCategory() {
        return category;
    }

    public Product setCategory(ProductCategory category) {
        this.category = category;
        return this;
    }

    public ProductType getType() {
        return type;
    }

    public Product setType(ProductType type) {
        this.type = type;
        return this;
    }

    public Area getCurrentArea() {
        return currentArea;
    }

    public Product setCurrentArea(Area currentArea) {
        this.currentArea = currentArea;
        return this;
    }

    public Laboratory getCurrentLaboratory() {
        return currentLaboratory;
    }

    public Product setCurrentLaboratory(Laboratory currentLaboratory) {
        this.currentLaboratory = currentLaboratory;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public Product setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public Product setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
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

    public static Product makeEntity(ProductDTO productDTO) {
        return new Product()
                .setCategory(productDTO.getCategory())
                .setType(productDTO.getType())
                .setDateCreated(productDTO.getDateCreated())
                .setDateModified(productDTO.getDateModified());
    }
}
