package univ.max.kursova.service.laboratory.interfaces;

import univ.max.kursova.model.Laboratory;

import java.util.List;

public interface ILaboratoryService {
    //  CRUD
    Laboratory save(Laboratory laboratory);        // Create
    Laboratory get(Long id) throws Exception;             // Read
    Laboratory edit(Laboratory laboratory);        // Update
    Laboratory delete(Long id);          // Delete
    List<Laboratory> getAll();
}
