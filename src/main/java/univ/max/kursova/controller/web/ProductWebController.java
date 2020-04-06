package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Product;
import univ.max.kursova.service.product.impls.ProductServiceImpl;

import java.util.List;

@Controller
@RequestMapping("/web/Product")
public class ProductWebController {

    @Autowired
    ProductServiceImpl productService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("productList", productService.getAll());
        return "productList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) {
        productService.delete(id);
        model.addAttribute("productList", productService.getAll());
        return "productList";
    }
}
