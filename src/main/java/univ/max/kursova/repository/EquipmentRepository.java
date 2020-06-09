package univ.max.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Equipment;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
}
