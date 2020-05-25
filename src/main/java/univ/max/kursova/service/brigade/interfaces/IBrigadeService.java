package univ.max.kursova.service.brigade.interfaces;

import univ.max.kursova.model.Area;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;

import java.util.List;

public interface IBrigadeService {
    //  CRUD
    Brigade save(Brigade worker);        // Create
    Brigade get(Long id) throws Exception;             // Read
    Brigade edit(Long id, List<Worker> workerList, Area area) throws Exception;        // Update
    Brigade delete(Long id);          // Delete
    List<Brigade> getAll();
}
