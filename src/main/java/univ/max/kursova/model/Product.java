package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import univ.max.kursova.dto.ProductDTO;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "products")
public class Product {

    private static final long serialVersionUID = -8656709875787631L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idProduct;

    @ManyToOne()
    @JoinColumn(name = "area_id", referencedColumnName = "id")
    private Area area;

    @ManyToOne()
    @JoinColumn(name = "laboratory_id", referencedColumnName = "id")
    private Laboratory currentLaboratory;

    @NotNull
    @Enumerated (EnumType.STRING)
    @Column(name = "category")
    private ProductCategory category;

    @NotNull
    @Enumerated (EnumType.STRING)
    @Column(name = "type")
    private ProductType type;

    @Column(name = "created_at")
    private LocalDateTime dateCreated;

    @Column(name = "modified_at")
    private LocalDateTime dateModified;

    public Product() {
    }

    public Product(Long idProduct, ProductCategory category, ProductType type, Area area,
                   Laboratory currentLaboratory, LocalDateTime dateCreated, LocalDateTime dateModified) {
        this.idProduct = idProduct;
        this.category = category;
        this.type = type;
        this.area = area;
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

    public Area getArea() {
        return area;
    }

    public Product setArea(Area area) {
        this.area = area;
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
