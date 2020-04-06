package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.TeamOfAreaBoss;

@Repository
public interface TeamOfAreaBossRepository extends MongoRepository<TeamOfAreaBoss, Long> {
}
