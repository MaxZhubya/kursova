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

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public Product save(Product product) {
        return repository.save(product);
    }

    @Override
    public Product get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechPersonal with is: "
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
    public Product delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Product> getAll() {
        return repository.findAll();
    }
}
