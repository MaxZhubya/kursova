package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Worker;

import java.util.List;

@Repository
public interface WorkerRepository extends MongoRepository<Worker, Long> {

    //List<Worker> findAllByIdWorkerIn(List<Long> ids);

}
