package univ.max.kursova.service.product.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.ProductEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;
import univ.max.kursova.repository.ProductRepository;
import univ.max.kursova.service.product.interfaces.IProductService;
import univ.max.kursova.service.sequence.SequenceServiceImpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    @Autowired
    private ProductRepository repository;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
    /*----------------------------------------------------------------*/

    @Override
    public Product get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Product with id: "
                + id.toString() + "is not existed"));
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
                + id.toString() + "is not existed"));
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
