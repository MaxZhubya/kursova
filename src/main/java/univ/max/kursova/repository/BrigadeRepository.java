package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Brigade;

@Repository
public interface BrigadeRepository extends MongoRepository<Brigade, Long> {
}
