package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.WorkerEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Worker;
import univ.max.kursova.repository.WorkerRepository;
import univ.max.kursova.service.IWorkerService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class WorkerServiceImpl implements IWorkerService {

    @Autowired
    private WorkerRepository repository;

    @Override
    public Worker get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Worker with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Worker> getAll() {
        return repository.findAll();
    }

    @Override
    public Worker create(WorkerEditDTO workerEditDTO) {
        return null;
    }

    @Override
    public Worker update(WorkerEditDTO workerEditDTO) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("Worker with id: "
                + id.toString() + " is not existed"));
        repository.deleteById(id);
    }

    @Override
    public Worker save(Worker worker) {
        return repository.save(worker);
    }

    @Override
    public List<Worker> save(List<Worker> workerList) {
        return repository.saveAll(workerList);
    }

}
