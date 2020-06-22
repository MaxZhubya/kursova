package univ.max.kursova.service;

import univ.max.kursova.dto.ProductDTO;
import univ.max.kursova.dto.ProductEditDTO;
import univ.max.kursova.model.Product;
import java.util.List;

public interface IProductService {
    //  CRUD
    ProductDTO get(Long id);   // Read
    List<ProductDTO> getAll(); // Read
    ProductDTO create(ProductEditDTO productEditDTO);   // Create
    ProductDTO update(ProductEditDTO productEditDTO);   // Update
    void delete(Long id);   // Delete
    Product save(Product product);
    List<Product> save(List<Product> productList);
    Product getEntity(Long id);
    List<Product> getEntitiesByIds(List<Long> ids);
}
