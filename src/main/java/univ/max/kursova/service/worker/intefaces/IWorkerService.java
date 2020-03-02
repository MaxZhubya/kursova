package univ.max.kursova.service.worker.intefaces;

import univ.max.kursova.model.Worker;

import java.util.List;

public interface IWorkerService {
    //  CRUD
    Worker save(Worker worker);        // Create
    Worker get(long id);             // Read
    Worker edit(Worker worker);        // Update
    Worker delete(long id);          // Delete
    List<Worker> getAll();
}
