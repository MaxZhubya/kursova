package univ.max.kursova.service.product.interfaces;

import univ.max.kursova.model.Product;

import java.util.List;

public interface IProductService {
    //  CRUD
    Product save(Product product);        // Create
    Product get(Long id);             // Read
    Product edit(Product product);        // Update
    Product delete(Long id);          // Delete
    List<Product> getAll();
}
