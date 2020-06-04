package univ.max.kursova.service.equipForLabService.interfaces;

import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.enums.EquipmentType;

import java.time.LocalDateTime;
import java.util.List;

public interface IEquipForLabService {
    //  CRUD
    EquipmentForLaboratory save(Long id, Laboratory laboratory, EquipmentType equipmentType, String definition,
                                LocalDateTime dateCreated, LocalDateTime dateModified);        // Create
    EquipmentForLaboratory get(Long id) throws Exception;             // Read
    EquipmentForLaboratory edit(Long id, Laboratory laboratory, EquipmentType equipmentType, String definition) throws Exception;        // Update
    void delete(Long id) throws Exception;          // Delete
    List<EquipmentForLaboratory> getAll();
}
