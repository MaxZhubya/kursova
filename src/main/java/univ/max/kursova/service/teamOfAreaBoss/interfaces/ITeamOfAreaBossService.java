package univ.max.kursova.service.teamOfAreaBoss.interfaces;

import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;

import java.time.LocalDateTime;
import java.util.List;

public interface ITeamOfAreaBossService {
    //  CRUD
    TeamOfAreaBoss save(Long id, List<TechnicalPersonal> technicalPersonalList, Area area, LocalDateTime dateCreated, LocalDateTime dateModified);        // Create
    TeamOfAreaBoss get(Long id) throws Exception;             // Read
    TeamOfAreaBoss edit(Long id, List<TechnicalPersonal> technicalPersonalList, Area area) throws Exception;        // Update
    void delete(Long id) throws Exception;          // Delete
    List<TeamOfAreaBoss> getAll();
}
