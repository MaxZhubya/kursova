package univ.max.kursova.service.workshop.interfaces;

import univ.max.kursova.model.Workshop;

import java.util.List;

public interface IWorkshopService {
    //  CRUD
    Workshop save(Workshop workshop);        // Create
    Workshop get(long id);             // Read
    Workshop edit(Workshop workshop);        // Update
    Workshop delete(long id);          // Delete
    List<Workshop> getAll();
}
