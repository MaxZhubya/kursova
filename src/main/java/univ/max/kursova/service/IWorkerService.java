package univ.max.kursova.service;

import univ.max.kursova.dto.WorkerEditDTO;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.enums.WorkerType;

import java.time.LocalDateTime;
import java.util.List;

public interface IWorkerService {
    //  CRUD
    Worker get(Long id);    // Read
    List<Worker> getAll();  // Read
    Worker create(WorkerEditDTO workerEditDTO); // Create
    Worker update(WorkerEditDTO workerEditDTO); // Update
    void delete(Long id);   // Delete
    Worker save(Worker worker);
    List<Worker> save(List<Worker> workerList);
}
