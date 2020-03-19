package univ.max.kursova.dao.product.impls;

import org.springframework.stereotype.Component;
import univ.max.kursova.dao.product.interfaces.IProductDao;
import univ.max.kursova.model.Product;

import java.util.List;

@Component
public class ProductDaoImpl implements IProductDao {
    @Override
    public Product save(Product product) {
        return null;
    }

    @Override
    public Product get(Long id) {
        return null;
    }

    @Override
    public Product edit(Product product) {
        return null;
    }

    @Override
    public Product delete(Long id) {
        return null;
    }

    @Override
    public List<Product> getAll() {
        return null;
    }
}
