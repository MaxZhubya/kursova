package univ.max.kursova.dao.brigade.interfaces;

import univ.max.kursova.model.Brigade;

import java.util.List;

public interface IBrigadeDao {
    //  CRUD
    Brigade save(Brigade worker);        // Create
    Brigade get(Long id);             // Read
    Brigade edit(Brigade brigade);        // Update
    Brigade delete(Long id);          // Delete
    List<Brigade> getAll();
}
