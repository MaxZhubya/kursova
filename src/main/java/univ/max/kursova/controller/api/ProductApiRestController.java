package univ.max.kursova.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.ProductDTO;
import univ.max.kursova.model.Product;
import univ.max.kursova.service.product.impls.ProductServiceImpl;
import univ.max.kursova.view.Views;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/Product")
public class ProductApiRestController {

    @Autowired
    ProductServiceImpl productService;

    //@JsonView(Views.ProductView.class)
    @GetMapping("/list")
    public ResponseEntity<List<ProductDTO>> getAll() {
        List<ProductDTO> productList = productService.getAll().stream()
                .map(ProductDTO::makeDTO).collect(Collectors.toList());
        if (productList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<ProductDTO>>(productList, HttpStatus.OK);
    }

    //@JsonView(Views.ProductView.class)
    @GetMapping("/list/{id}")
    public ResponseEntity<ProductDTO> getById(@PathVariable("id") Long id) {
        try {
            ProductDTO productDTO = ProductDTO.makeDTO(productService.get(id));
            return new ResponseEntity<>(productDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //@JsonView(Views.ProductView.class)
    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody ProductDTO productDTO) {
        try {
            productService.create(Product.makeEntity(productDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new Product", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //@JsonView(Views.ProductView.class)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        try {
            productService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
