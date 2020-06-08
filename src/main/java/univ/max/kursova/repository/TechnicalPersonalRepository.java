package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.TechnicalPersonal;

import java.util.List;

@Repository
public interface TechnicalPersonalRepository extends MongoRepository<TechnicalPersonal, Long> {

    List<TechnicalPersonal> getByIdTechPersonalIn(List<Long> ids);

}
