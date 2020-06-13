package univ.max.kursova.service;

import univ.max.kursova.dto.EquipmentEditDTO;
import univ.max.kursova.model.Equipment;

import java.util.List;

public interface IEquipmentService {
    //  CRUD
    Equipment get(Long id);    // Read
    List<Equipment> getAll();    // Read
    Equipment create(EquipmentEditDTO equipment); // Create
    Equipment update(EquipmentEditDTO equipment); // Update
    void delete(Long id);   // Delete
    Equipment save(Equipment equipment);
    List<Equipment> save(List<Equipment> equipmentList);
    List<Equipment> getEntitiesByIds(List<Long> ids);
}
