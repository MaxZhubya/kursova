package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.ProductDTO;
import univ.max.kursova.dto.ProductEditDTO;
import univ.max.kursova.service.IProductService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductApiRestController {

    @Autowired
    IProductService productService;

    @GetMapping("/list")
    public ResponseEntity<List<ProductDTO>> getAll() {
        return new ResponseEntity<>(productService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<ProductDTO> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(productService.get(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ProductDTO> create(@RequestBody @Valid ProductEditDTO productEditDTO) {
        return new ResponseEntity<>(productService.create(productEditDTO), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<ProductDTO> update(@RequestBody @Valid ProductEditDTO productEditDTO) {
        return new ResponseEntity<>(productService.update(productEditDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
