package univ.max.kursova.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.EquipmentForLaboratory;

@Repository
public interface EquipmentForLabRepository extends MongoRepository<EquipmentForLaboratory, Long> {
}
