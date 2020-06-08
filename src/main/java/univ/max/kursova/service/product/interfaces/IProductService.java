package univ.max.kursova.service.product.interfaces;

import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.dto.ProductEditDTO;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;

import java.time.LocalDateTime;
import java.util.List;

public interface IProductService {
    //  CRUD
    Product get(Long id);   // Read
    List<Product> getAll(); // Read
    List<Product> getByIds(List<Long> ids); // Read
    Product create(ProductEditDTO productEditDTO);   // Create
    Product update(ProductEditDTO productEditDTO);   // Update
    void delete(Long id);   // Delete
    Product save(Product product);
    List<Product> save(List<Product> productList);
}
