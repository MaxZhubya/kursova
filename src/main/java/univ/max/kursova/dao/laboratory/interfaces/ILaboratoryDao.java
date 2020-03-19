package univ.max.kursova.dao.laboratory.interfaces;

import univ.max.kursova.model.Laboratory;

import java.util.List;

public interface ILaboratoryDao {
    //  CRUD
    Laboratory save(Laboratory laboratory);        // Create
    Laboratory get(Long id);             // Read
    Laboratory edit(Laboratory laboratory);        // Update
    Laboratory delete(Long id);          // Delete
    List<Laboratory> getAll();
}
