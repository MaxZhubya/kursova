package univ.max.kursova.service.product.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*----------------------------------------------------------------*/

    @Autowired
    private ProductRepository repository;

    @Override
    public Product save(Long id, Area currentArea, Laboratory currentLaboratory,
                        ProductCategory category, ProductType type, LocalDateTime dateCreated, LocalDateTime dateModified) {
        return repository.save(new Product().setIdProduct(getId(Product.SEQUENCE_NAME)).setCurrentArea(currentArea)
                .setCurrentLaboratory(currentLaboratory).setCategory(category).setType(type).setDateCreated(dateCreated).setDateModified(dateModified));
    }

    @Override
    public Product get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Product with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Product edit(Long id, Area currentArea, Laboratory currentLaboratory,
                        ProductCategory category, ProductType type) throws Exception {
        Optional<Product> optionalProduct = repository.findById(id);

        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setCurrentArea(currentArea);
            product.setCurrentLaboratory(currentLaboratory);
            product.setCategory(category);
            product.setType(type);
            return repository.save(product);
        } else {
            throw new Exception("Current Product doesn't exist");
        }
    }

    @Override
    public void delete(Long id) throws Exception {
        repository.findById(id).orElseThrow(() -> new Exception("Product with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public List<Product> getAll() {
        return repository.findAll();
    }

    public void create(Product product) {
        save(product.getIdProduct(), product.getCurrentArea(), product.getCurrentLaboratory(), product.getCategory(),
                product.getType(), product.getDateCreated(), product.getDateModified());
    }

}
