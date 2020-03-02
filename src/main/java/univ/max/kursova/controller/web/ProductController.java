package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import univ.max.kursova.model.Product;
import univ.max.kursova.service.product.impls.ProductServiceImpl;

import java.util.List;

public class ProductController {
    @Autowired
    ProductServiceImpl productService;

    @RequestMapping("/list")
    List<Product> getAll() {
        return productService.getAll();
    }
}
