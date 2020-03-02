package univ.max.kursova.service.product.interfaces;

import univ.max.kursova.model.Product;

import java.util.List;

public interface IProductService {
    //  CRUD
    Product save(Product product);        // Create
    Product get(long id);             // Read
    Product edit(Product product);        // Update
    Product delete(long id);          // Delete
    List<Product> getAll();
}
