package univ.max.kursova.service.brigade.interfaces;

import univ.max.kursova.model.Brigade;

import java.util.List;

public interface IBrigadeService {
    //  CRUD
    Brigade save(Brigade worker);        // Create
    Brigade get(long id);             // Read
    Brigade edit(Brigade brigade);        // Update
    Brigade delete(long id);          // Delete
    List<Brigade> getAll();
}
