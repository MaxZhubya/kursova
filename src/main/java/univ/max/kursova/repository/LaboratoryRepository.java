package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Laboratory;

@Repository
public interface LaboratoryRepository extends MongoRepository<Laboratory, Long> {
}
