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
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/product")
public class ProductApiRestController {

    @Autowired
    IProductService productService;

    @GetMapping("/list")
    public ResponseEntity<List<ProductDTO>> getAll() {
        List<ProductDTO> productList = productService.getAll().stream()
                .map(ProductDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<ProductDTO> getById(@PathVariable("id") Long id) {
        ProductDTO productDTO = ProductDTO.makeDTO(productService.get(id));
        return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ProductDTO> create(@RequestBody @Valid ProductEditDTO productEditDTO) {
        ProductDTO productDTO = ProductDTO.makeDTO(productService.create(productEditDTO));
        return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<ProductDTO> update(@RequestBody @Valid ProductEditDTO productEditDTO) {
        ProductDTO productDTO = ProductDTO.makeDTO(productService.update(productEditDTO));
        return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
