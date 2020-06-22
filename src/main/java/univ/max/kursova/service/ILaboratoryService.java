package univ.max.kursova.service;

import univ.max.kursova.dto.LaboratoryDTO;
import univ.max.kursova.dto.LaboratoryEditDTO;
import univ.max.kursova.model.Laboratory;

import java.util.List;

public interface ILaboratoryService {
    //  CRUD
    LaboratoryDTO get(Long id);   // Read
    List<LaboratoryDTO> getAll();  // Read
    LaboratoryDTO create(LaboratoryEditDTO laboratoryEditDTO);  // Create
    LaboratoryDTO update(LaboratoryEditDTO laboratoryEditDTO);  // Update
    void delete(Long id);  // Delete
    Laboratory save(Laboratory laboratory);
    List<Laboratory> save(List<Laboratory> laboratoryList);
    Laboratory getEntity(Long id);
    List<Laboratory> getEntitiesByIds(List<Long> ids);
}
