package univ.max.kursova.service.worker.intefaces;

import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.enums.WorkerType;

import java.time.LocalDateTime;
import java.util.List;

public interface IWorkerService {
    //  CRUD
    Worker save(Long id, Brigade brigade, String workerName, WorkerType workerType, LocalDateTime dateCreated, LocalDateTime dateModified);             // Create
    Worker get(Long id) throws Exception;   // Read
    Worker edit(Long id, Brigade brigade, String workerName, WorkerType workerType) throws Exception;             // Update
    void delete(Long id) throws Exception;                 // Delete
    List<Worker> getAll();
}
