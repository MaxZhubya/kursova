package univ.max.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.EquipmentForLaboratory;

@Repository
public interface EquipmentForLabRepository extends JpaRepository<EquipmentForLaboratory, Long> {
}
