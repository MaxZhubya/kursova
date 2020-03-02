package univ.max.kursova.dao.brigade.interfaces;

import univ.max.kursova.model.Brigade;

import java.util.List;

public interface IBrigadeDao {
    //  CRUD
    Brigade save(Brigade worker);        // Create
    Brigade get(long id);             // Read
    Brigade edit(Brigade brigade);        // Update
    Brigade delete(long id);          // Delete
    List<Brigade> getAll();
}
