package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.EquipmentDTO;
import univ.max.kursova.dto.EquipmentEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Equipment;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.repository.EquipmentRepository;
import univ.max.kursova.service.IEquipmentService;
import univ.max.kursova.service.ILaboratoryService;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class EquipmentServiceImpl implements IEquipmentService {

    @Autowired
    private EquipmentRepository repository;

    @Autowired
    private ILaboratoryService laboratoryService;

    @Override
    @Transactional(readOnly = true)
    public EquipmentDTO get(Long id) {
        return EquipmentDTO.makeDTO(getEntity(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<EquipmentDTO> getAll() {
        return repository.findAll().stream().map(EquipmentDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public EquipmentDTO create(EquipmentEditDTO equipmentEditDTO) {
        Equipment equipment = new Equipment()
                .setEquipmentType(equipmentEditDTO.getEquipmentType())
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        equipment = repository.save(equipment);

        // Set data from edit DTO
        setInputData(equipment, equipmentEditDTO);

        return EquipmentDTO.makeDTO(repository.save(equipment));
    }

    @Override
    public EquipmentDTO update(EquipmentEditDTO equipmentEditDTO) {
        if (Objects.isNull(equipmentEditDTO.getIdEquipment()))
            throw new DataValidationException("ID can not be null!");

        Equipment equipment = getEntity(equipmentEditDTO.getIdEquipment())
                .setDateModified(LocalDateTime.now());;

        // Remove current entity from all
        clearRelatedData(equipment);

        // Set data from edit DTO
        setInputData(equipment, equipmentEditDTO);

        return EquipmentDTO.makeDTO(repository.save(equipment));
    }

    @Override
    public void delete(Long id) {
        Equipment equipment = getEntity(id);

        // Remove current entity from all
        clearRelatedData(equipment);

        repository.delete(equipment);
    }

    @Override
    public Equipment save(Equipment equipment) {
        return repository.save(equipment);
    }

    @Override
    public List<Equipment> save(List<Equipment> equipmentList) {
        return repository.saveAll(equipmentList);
    }

    @Override
    public Equipment getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Equipment with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Equipment> getEntitiesByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

    private void setInputData(Equipment equipment, EquipmentEditDTO equipmentEditDTO) {
        equipment.setDefinition(equipmentEditDTO.getDefinition());

        if (Objects.nonNull(equipmentEditDTO.getIdLaboratory())) {
            Laboratory laboratory = laboratoryService.getEntity(equipmentEditDTO.getIdLaboratory());
            laboratory.getEquipmentList().add(equipment);
            equipment.setLaboratory(laboratory);
        }
    }

    private void clearRelatedData(Equipment equipment) {
        if (Objects.nonNull(equipment.getLaboratory())) {
            equipment.getLaboratory().getEquipmentList().remove(equipment);
            equipment.setLaboratory(null);
        }
    }

}
