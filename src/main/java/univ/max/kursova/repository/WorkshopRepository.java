package univ.max.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Workshop;

@Repository
public interface WorkshopRepository extends JpaRepository<Workshop, Long> {
}
