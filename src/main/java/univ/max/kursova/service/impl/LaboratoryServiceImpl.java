package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.LaboratoryDTO;
import univ.max.kursova.dto.LaboratoryEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Equipment;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.repository.LaboratoryRepository;
import univ.max.kursova.service.IEquipmentService;
import univ.max.kursova.service.ILaboratoryService;
import univ.max.kursova.service.IProductService;
import univ.max.kursova.service.IWorkshopService;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class LaboratoryServiceImpl implements ILaboratoryService {

    @Autowired
    private LaboratoryRepository repository;

    @Autowired
    private IProductService productService;

    @Autowired
    private IEquipmentService equipmentService;

    @Autowired
    private IWorkshopService workshopService;

    @Override
    public LaboratoryDTO get(Long id) {
        return LaboratoryDTO.makeDTO(getEntity(id));
    }

    @Override
    public List<LaboratoryDTO> getAll() {
        return repository.findByOrderByIdLaboratoryAsc().stream().map(LaboratoryDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public LaboratoryDTO create(LaboratoryEditDTO laboratoryEditDTO) {
        Laboratory laboratory = new Laboratory()
                .setDefinition(laboratoryEditDTO.getDefinition())
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        laboratory = repository.save(laboratory);

        // Set data from edit DTO
        setInputData(laboratory, laboratoryEditDTO);

        return LaboratoryDTO.makeDTO(repository.save(laboratory));
    }

    @Override
    public LaboratoryDTO update(LaboratoryEditDTO laboratoryEditDTO) {
        if (Objects.isNull(laboratoryEditDTO.getIdLaboratory()))
            throw new DataValidationException("ID can not be null!");

        Laboratory laboratory = getEntity(laboratoryEditDTO.getIdLaboratory())
                .setDateModified(LocalDateTime.now());

        // Clare all related data
        clearRelatedData(laboratory);

        // Set data from edit DTO
        setInputData(laboratory, laboratoryEditDTO);

        return LaboratoryDTO.makeDTO(repository.save(laboratory));
    }

    @Override
    public void delete(Long id) {
        Laboratory laboratory = getEntity(id);

        // Remove current entity from all
        clearRelatedData(laboratory);

        repository.delete(laboratory);
    }

    @Override
    public Laboratory save(Laboratory laboratory) {
        return repository.save(laboratory);
    }

    @Override
    public List<Laboratory> save(List<Laboratory> laboratoryList) {
        return repository.saveAll(laboratoryList);
    }

    @Override
    public Laboratory getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Laboratory with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Laboratory> getEntitiesByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

    private void setInputData(Laboratory laboratory, LaboratoryEditDTO laboratoryEditDTO) {
        List<Product> productList = productService.getEntitiesByIds(laboratoryEditDTO.getProductIdList());
        if (productList.size() != laboratoryEditDTO.getProductIdList().size())
            throw new DataValidationException("The Product ids are wrong!");
        productList.forEach(value -> value.setLaboratory(laboratory));
        laboratory.getProductList().addAll(productList);

        List<Equipment> equipmentList = equipmentService.getEntitiesByIds(laboratoryEditDTO.getEquipmentIdList());
        if (equipmentList.size() != laboratoryEditDTO.getEquipmentIdList().size())
            throw new DataValidationException("The Equipment ids are wrong!");
        equipmentList.forEach(value -> value.setLaboratory(laboratory));
        laboratory.getEquipmentList().addAll(equipmentList);

        List<Workshop> workshopList = workshopService.getEntitiesByIds(laboratoryEditDTO.getWorkshopIdList());
        if (workshopList.size() != laboratoryEditDTO.getWorkshopIdList().size())
            throw new DataValidationException("The Workshop ids are wrong!");
        workshopList.forEach(value -> value.getLaboratoryList().add(laboratory));
        laboratory.getWorkshopList().addAll(workshopList);
    }

    private void clearRelatedData(Laboratory laboratory) {
        laboratory.getProductList().forEach(value -> value.setLaboratory(null));
        laboratory.getProductList().clear();

        laboratory.getEquipmentList().forEach(value -> value.setLaboratory(null));
        laboratory.getEquipmentList().clear();

        laboratory.getWorkshopList().forEach(value -> value.getLaboratoryList().remove(laboratory));
        laboratory.getWorkshopList().clear();
    }

}
