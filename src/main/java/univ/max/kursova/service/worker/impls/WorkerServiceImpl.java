package univ.max.kursova.service.worker.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.enums.WorkerType;
import univ.max.kursova.model.sequence.DatabaseSequence;
import univ.max.kursova.repository.WorkerRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.worker.intefaces.IWorkerService;

import javax.annotation.PostConstruct;
import java.lang.reflect.Executable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class WorkerServiceImpl implements IWorkerService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*-----------------------------------------------------------------*/

    @Autowired
    private WorkerRepository repository;

    @Override
    public Worker save(Long id, Brigade brigade, String workerName, WorkerType workerType, LocalDateTime dateCreated, LocalDateTime dateModified) {
        return repository.save(new Worker().setIdWorker(getId(Worker.SEQUENCE_NAME)).setBrigade(brigade)
                .setWorkerName(workerName).setWorkerType(workerType).setDateCreated(dateCreated).setDateModified(dateModified));
    }

    @Override
    public Worker get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Worker edit(Long id, Brigade brigade, String workerName, WorkerType workerType) throws Exception {
        Optional<Worker> optionalWorker = repository.findById(id);

        if (optionalWorker.isPresent()) {
            Worker worker = optionalWorker.get();
            worker.setBrigade(brigade);
            worker.setWorkerName(workerName);
            worker.setWorkerType(workerType);
            return repository.save(worker);
        } else {
            throw new Exception("Current Worker doesn't exist in DB");
        }
    }

    @Override
    public void delete(Long id) throws Exception {
        repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public List<Worker> getAll() {
        return repository.findAll();
    }

    public void create(Worker worker) {
        save(worker.getIdWorker(), worker.getBrigade(), worker.getWorkerName(), worker.getWorkerType(), worker.getDateCreated(),
                worker.getDateModified());
    }
}
