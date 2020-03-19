package univ.max.kursova.service.brigade.interfaces;

import univ.max.kursova.model.Brigade;

import java.util.List;

public interface IBrigadeService {
    //  CRUD
    Brigade save(Brigade worker);        // Create
    Brigade get(Long id);             // Read
    Brigade edit(Brigade brigade);        // Update
    Brigade delete(Long id);          // Delete
    List<Brigade> getAll();
}
