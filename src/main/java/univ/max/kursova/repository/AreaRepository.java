package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Area;

@Repository
public interface AreaRepository extends MongoRepository<Area, Long> {
}
