package univ.max.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import univ.max.kursova.model.TeamOfAreaBoss;

import java.util.List;

@Repository
public interface TeamOfAreaBossRepository extends JpaRepository<TeamOfAreaBoss, Long> {
    List<TeamOfAreaBoss> findByOrderByIdTeamAsc();
}
