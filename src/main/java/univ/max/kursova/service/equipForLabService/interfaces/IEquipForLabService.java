package univ.max.kursova.service.equipForLabService.interfaces;

import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.enums.EquipmentType;

import java.util.List;

public interface IEquipForLabService {
    //  CRUD
    EquipmentForLaboratory save(Long id, Laboratory laboratory, EquipmentType equipmentType, String definition);        // Create
    EquipmentForLaboratory get(Long id) throws Exception;             // Read
    EquipmentForLaboratory edit(Long id, Laboratory laboratory, EquipmentType equipmentType, String definition) throws Exception;        // Update
    EquipmentForLaboratory delete(Long id);          // Delete
    List<EquipmentForLaboratory> getAll();
}
