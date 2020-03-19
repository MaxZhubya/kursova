package univ.max.kursova.service.worker.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.worker.impls.WorkerDaoImpl;
import univ.max.kursova.model.Worker;
import univ.max.kursova.service.worker.intefaces.IWorkerService;

import java.util.List;

@Service
public class WorkerServiceImpl implements IWorkerService {
    @Autowired
    WorkerDaoImpl workerDao;

    @Override
    public Worker save(Worker worker) {
        return null;
    }

    @Override
    public Worker get(Long id) {
        return null;
    }

    @Override
    public Worker edit(Worker worker) {
        return null;
    }

    @Override
    public Worker delete(Long id) {
        return null;
    }

    @Override
    public List<Worker> getAll() {
        return workerDao.getAll();
    }
}
