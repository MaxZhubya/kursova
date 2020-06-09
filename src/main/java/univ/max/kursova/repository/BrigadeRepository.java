package univ.max.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.Brigade;

import java.util.List;

@Repository
public interface BrigadeRepository extends JpaRepository<Brigade, Long> {

    List<Brigade> getByIdBrigadeIn(List<Long> ids);

}
