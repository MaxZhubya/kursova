package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.enums.ProductCategory;
import univ.max.kursova.model.enums.ProductType;
import univ.max.kursova.service.impl.ProductServiceImpl;

import java.time.LocalDateTime;

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
    String delete(Model model, @PathVariable("id") Long id) throws Exception {
        productService.delete(id);
        model.addAttribute("productList", productService.getAll());
        return "productList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, Area currentArea, Laboratory currentLaboratory,
                ProductCategory category, ProductType type) throws Exception {
        // productService.edit(id, currentArea, currentLaboratory, category, type);
        model.addAttribute("productList", productService.getAll());
        return "productList";
    }

    @RequestMapping("/save/{id}")
    String save(Model model, @PathVariable("id") Long id, Area currentArea, Laboratory currentLaboratory,
                ProductCategory category, ProductType type, LocalDateTime dateCreated, LocalDateTime dateModified) {
        // productService.save(id, currentArea, currentLaboratory, category, type, dateCreated, dateModified);
        model.addAttribute("productList", productService.getAll());
        return "productList";
    }
}
