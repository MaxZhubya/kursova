package univ.max.kursova.dao.equipForLab.interfaces;

import univ.max.kursova.model.EquipmentForLaboratory;

import java.util.List;

public interface IEquipForLabDao {
    //  CRUD
    EquipmentForLaboratory save(EquipmentForLaboratory equipmentForLaboratory);        // Create
    EquipmentForLaboratory get(Long id);             // Read
    EquipmentForLaboratory edit(EquipmentForLaboratory equipmentForLaboratory);        // Update
    EquipmentForLaboratory delete(Long id);          // Delete
    List<EquipmentForLaboratory> getAll();
}
