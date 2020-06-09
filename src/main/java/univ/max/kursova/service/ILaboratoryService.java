package univ.max.kursova.service;

import univ.max.kursova.dto.LaboratoryEditDTO;
import univ.max.kursova.model.Laboratory;

import java.util.List;

public interface ILaboratoryService {
    //  CRUD
    Laboratory get(Long id);   // Read
    List<Laboratory> getAll();  // Read
    Laboratory create(LaboratoryEditDTO laboratoryEditDTO);  // Create
    Laboratory update(LaboratoryEditDTO laboratoryEditDTO);  // Update
    void delete(Long id);  // Delete
    Laboratory save(Laboratory laboratory);
    List<Laboratory> save(List<Laboratory> laboratoryList);
}
