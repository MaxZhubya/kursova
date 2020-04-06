package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Workshop;

@Repository
public interface WorkshopRepository extends MongoRepository<Workshop, Long> {
}
