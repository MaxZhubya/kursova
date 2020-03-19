package univ.max.kursova.service.worker.intefaces;

import univ.max.kursova.model.Worker;

import java.util.List;

public interface IWorkerService {
    //  CRUD
    Worker save(Worker worker);        // Create
    Worker get(Long id);             // Read
    Worker edit(Worker worker);        // Update
    Worker delete(Long id);          // Delete
    List<Worker> getAll();
}
