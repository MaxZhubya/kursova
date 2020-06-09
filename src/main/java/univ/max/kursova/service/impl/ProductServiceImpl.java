package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.ProductEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Product;
import univ.max.kursova.repository.ProductRepository;
import univ.max.kursova.service.IProductService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProductServiceImpl implements IProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public Product get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Product with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Product> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Product> getByIds(List<Long> ids) {
        return repository.getByIdProductIn(ids);
    }

    @Override
    public Product create(ProductEditDTO productEditDTO) {
        return null;
    }

    @Override
    public Product update(ProductEditDTO productEditDTO) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("Product with id: "
                + id.toString() + " is not existed"));
        repository.deleteById(id);
    }

    @Override
    public Product save(Product product) {
        return repository.save(product);
    }

    @Override
    public List<Product> save(List<Product> productList) {
        return repository.saveAll(productList);
    }

}
