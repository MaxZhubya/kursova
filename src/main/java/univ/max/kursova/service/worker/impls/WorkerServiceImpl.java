package univ.max.kursova.service.worker.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.sequence.DatabaseSequence;
import univ.max.kursova.repository.WorkerRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.worker.intefaces.IWorkerService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class WorkerServiceImpl implements IWorkerService {

    @Autowired
    private WorkerRepository repository;

    @Override
    public Worker save(Worker worker) {
        return repository.save(worker);
    }

    @Override
    public Worker get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Worker edit(Worker worker) {
        return repository.save(worker);
    }

    @Override
    public Worker delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Worker> getAll() {
        return repository.findAll();
    }
}
