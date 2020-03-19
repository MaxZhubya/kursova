package univ.max.kursova.service.worker.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.worker.impls.WorkerDaoImpl;
import univ.max.kursova.model.Worker;
import univ.max.kursova.repository.WorkerRepository;
import univ.max.kursova.service.worker.intefaces.IWorkerService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class WorkerServiceImpl implements IWorkerService {

    @Autowired
    WorkerRepository repository;

    @Autowired
    WorkerDaoImpl workerDao;

    @PostConstruct
    void init() {
        List<Worker> list = workerDao.getAll();
        repository.saveAll(list);
    }

    @Override
    public Worker save(Worker worker) {
        return null;
    }

    @Override
    public Worker get(Long id) {
        return workerDao.getAll().stream().filter(item -> item.getIdWorker().equals(id)).findFirst()
                .orElse(null);
    }

    @Override
    public Worker edit(Worker worker) {
        return null;
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
