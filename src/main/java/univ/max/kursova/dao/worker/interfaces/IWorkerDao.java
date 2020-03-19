package univ.max.kursova.dao.worker.interfaces;

import univ.max.kursova.model.Worker;

import java.util.List;

public interface IWorkerDao {
    //  CRUD
    Worker save(Worker worker);        // Create
    Worker get(Long id);             // Read
    Worker edit(Worker worker);        // Update
    Worker delete(Long id);          // Delete
    List<Worker> getAll();
}
