package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.EquipmentEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Equipment;
import univ.max.kursova.repository.EquipmentRepository;
import univ.max.kursova.service.IEquipmentService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EquipmentServiceImpl implements IEquipmentService {

    @Autowired
    private EquipmentRepository repository;

    @Override
    public Equipment get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Equipment with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Equipment> getAll() {
        return repository.findAll();
    }

    @Override
    public Equipment create(EquipmentEditDTO equipment) {
        return null;
    }

    @Override
    public Equipment update(EquipmentEditDTO equipment) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("Equipment with id: "
                + id.toString() + " is not existed"));
        repository.deleteById(id);
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
    public List<Equipment> getEntitiesByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

}
