package univ.max.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.TechnicalPersonal;

import java.util.List;

@Repository
public interface TechnicalPersonalRepository extends JpaRepository<TechnicalPersonal, Long> {

    List<TechnicalPersonal> findByOrderByIdTechPersonalAsc();
    List<TechnicalPersonal> getByIdTechPersonalIn(List<Long> ids);

}
