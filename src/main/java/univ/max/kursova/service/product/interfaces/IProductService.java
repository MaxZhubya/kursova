package univ.max.kursova.service.product.interfaces;

import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import java.time.LocalDateTime;
import java.util.List;

public interface IProductService {
    //  CRUD
    Product save(Long id, Area currentArea, Laboratory currentLaboratory, ProductCategory category, ProductType type,
                 LocalDateTime dateCreated, LocalDateTime dateModified);        // Create
    Product get(Long id) throws Exception;             // Read
    Product edit(Long id, Area currentArea, Laboratory currentLaboratory,
                 ProductCategory category, ProductType type) throws Exception;        // Update
    void delete(Long id) throws Exception;          // Delete
    List<Product> getAll();
}
