package univ.max.kursova.service.brigade.interfaces;

import univ.max.kursova.model.Area;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;

import java.time.LocalDateTime;
import java.util.List;

public interface IBrigadeService {
    //  CRUD
    Brigade save(Long id, List<Worker> workerList, Area area, LocalDateTime dateCreated, LocalDateTime dateModified);        // Create
    Brigade get(Long id) throws Exception;             // Read
    Brigade edit(Long id, List<Worker> workerList, Area area) throws Exception;        // Update
    void delete(Long id) throws Exception;          // Delete
    List<Brigade> getAll();
}
