package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Product;
import univ.max.kursova.service.product.impls.ProductServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/Product")
public class ProductApiRestController {
    @Autowired
    ProductServiceImpl productService;

    @RequestMapping("/list")
    List<Product> getAll() {
        return productService.getAll();
    }
}
