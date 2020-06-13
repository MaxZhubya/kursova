package univ.max.kursova.service;

import univ.max.kursova.dto.WorkerDTO;
import univ.max.kursova.dto.WorkerEditDTO;
import univ.max.kursova.model.Worker;

import java.util.List;

public interface IWorkerService {
    //  CRUD
    WorkerDTO get(Long id);    // Read
    List<WorkerDTO> getAll();  // Read
    WorkerDTO create(WorkerEditDTO workerEditDTO); // Create
    WorkerDTO update(WorkerEditDTO workerEditDTO); // Update
    void delete(Long id);   // Delete
    Worker save(Worker worker);
    List<Worker> save(List<Worker> workerList);
    Worker getEntity(Long id);
    List<Worker> getEntitiesByIds(List<Long> ids);
}
