package univ.max.kursova.service;

import univ.max.kursova.dto.EquipmentDTO;
import univ.max.kursova.dto.EquipmentEditDTO;
import univ.max.kursova.model.Equipment;

import java.util.List;

public interface IEquipmentService {
    //  CRUD
    EquipmentDTO get(Long id);    // Read
    List<EquipmentDTO> getAll();    // Read
    EquipmentDTO create(EquipmentEditDTO equipment); // Create
    EquipmentDTO update(EquipmentEditDTO equipment); // Update
    void delete(Long id);   // Delete
    Equipment save(Equipment equipment);
    List<Equipment> save(List<Equipment> equipmentList);
    Equipment getEntity(Long id);
    List<Equipment> getEntitiesByIds(List<Long> ids);
}
