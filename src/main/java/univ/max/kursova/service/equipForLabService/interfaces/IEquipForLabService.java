package univ.max.kursova.service.equipForLabService.interfaces;

import univ.max.kursova.model.EquipmentForLaboratory;

import java.util.List;

public interface IEquipForLabService {
    //  CRUD
    EquipmentForLaboratory save(EquipmentForLaboratory equipmentForLaboratory);        // Create
    EquipmentForLaboratory get(Long id);             // Read
    EquipmentForLaboratory edit(EquipmentForLaboratory equipmentForLaboratory);        // Update
    EquipmentForLaboratory delete(Long id);          // Delete
    List<EquipmentForLaboratory> getAll();
}
