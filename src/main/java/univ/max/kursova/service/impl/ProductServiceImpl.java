package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.ProductDTO;
import univ.max.kursova.dto.ProductEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.repository.ProductRepository;
import univ.max.kursova.service.IAreaService;
import univ.max.kursova.service.ILaboratoryService;
import univ.max.kursova.service.IProductService;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductServiceImpl implements IProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private IAreaService areaService;

    @Autowired
    private ILaboratoryService laboratoryService;

    @Override
    @Transactional(readOnly = true)
    public ProductDTO get(Long id) {
        return ProductDTO.makeDTO(getEntity(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductDTO> getAll() {
        return repository.findByOrderByIdProductAsc().stream().map(ProductDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public ProductDTO create(ProductEditDTO productEditDTO) {
        Product product = new Product()
                .setCategory(productEditDTO.getCategory())
                .setType(productEditDTO.getType())
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        product = repository.save(product);

        // Set data from edit DTO
        setInputData(product, productEditDTO);

        return ProductDTO.makeDTO(repository.save(product));
    }

    @Override
    public ProductDTO update(ProductEditDTO productEditDTO) {
        if (Objects.isNull(productEditDTO.getIdProduct()))
            throw new DataValidationException("ID can not be null!");

        Product product = getEntity(productEditDTO.getIdProduct())
                .setDateModified(LocalDateTime.now());

        // Clare all related data
        clearRelatedData(product);

        // Set data from edit DTO
        setInputData(product, productEditDTO);

        return ProductDTO.makeDTO(repository.save(product));
    }

    @Override
    public void delete(Long id) {
        Product product = getEntity(id);

        // Remove current entity from all
        clearRelatedData(product);

        repository.delete(product);
    }

    @Override
    public Product save(Product product) {
        return repository.save(product);
    }

    @Override
    public List<Product> save(List<Product> productList) {
        return repository.saveAll(productList);
    }

    @Override
    public Product getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Product with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Product> getEntitiesByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

    private void setInputData(Product product, ProductEditDTO productEditDTO) {
        product.setCategory(productEditDTO.getCategory())
                .setType(productEditDTO.getType());

        if (Objects.nonNull(productEditDTO.getIdArea())) {
            Area area = areaService.getEntity(productEditDTO.getIdArea());
            area.getProductList().add(product);
            product.setArea(area);
        }

        if (Objects.nonNull(productEditDTO.getIdLaboratory())) {
            Laboratory laboratory = laboratoryService.getEntity(productEditDTO.getIdLaboratory());
            laboratory.getProductList().add(product);
            product.setLaboratory(laboratory);
        }
    }

    private void clearRelatedData(Product product) {
        if (Objects.nonNull(product.getArea())) {
            product.getArea().getProductList().remove(product);
            product.setArea(null);
        }

        if (Objects.nonNull(product.getLaboratory())) {
            product.getLaboratory().getProductList().remove(product);
            product.setLaboratory(null);
        }
    }

}
