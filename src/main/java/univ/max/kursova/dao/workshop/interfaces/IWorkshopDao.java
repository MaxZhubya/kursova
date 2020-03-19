package univ.max.kursova.dao.workshop.interfaces;

import univ.max.kursova.model.Workshop;

import java.util.List;

public interface IWorkshopDao {
    //  CRUD
    Workshop save(Workshop workshop);        // Create
    Workshop get(Long id);             // Read
    Workshop edit(Workshop workshop);        // Update
    Workshop delete(Long id);          // Delete
    List<Workshop> getAll();
}
