package univ.max.kursova.dao.worker.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import univ.max.kursova.dao.worker.interfaces.IWorkerDao;
import univ.max.kursova.dataSet.DataSet;
import univ.max.kursova.model.Worker;

import java.util.List;

@Component
public class WorkerDaoImpl implements IWorkerDao {

    @Autowired
    DataSet dataSet;

    @Override
    public Worker save(Worker worker) {
        dataSet.getWorkerList().add(worker);
        return worker;
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
        return dataSet.getWorkerList();
    }
}
