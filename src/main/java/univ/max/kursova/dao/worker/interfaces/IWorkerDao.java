package univ.max.kursova.dao.worker.interfaces;

import univ.max.kursova.model.Worker;

import java.util.List;

public interface IWorkerDao {
    //  CRUD
    Worker save(Worker worker);        // Create
    Worker get(long id);             // Read
    Worker edit(Worker worker);        // Update
    Worker delete(long id);          // Delete
    List<Worker> getAll();
}
