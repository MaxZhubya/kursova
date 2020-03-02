package univ.max.kursova.service.product.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.product.impls.ProductDaoImpl;
import univ.max.kursova.model.Product;
import univ.max.kursova.service.product.interfaces.IProductService;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    ProductDaoImpl productDao;

    @Override
    public Product save(Product product) {
        return null;
    }

    @Override
    public Product get(long id) {
        return null;
    }

    @Override
    public Product edit(Product product) {
        return null;
    }

    @Override
    public Product delete(long id) {
        return null;
    }

    @Override
    public List<Product> getAll() {
        return productDao.getAll();
    }
}
