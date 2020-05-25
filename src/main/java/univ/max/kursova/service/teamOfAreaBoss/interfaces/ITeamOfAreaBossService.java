package univ.max.kursova.service.teamOfAreaBoss.interfaces;

import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;

import java.util.List;

public interface ITeamOfAreaBossService {
    //  CRUD
    TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss);        // Create
    TeamOfAreaBoss get(Long id) throws Exception;             // Read
    TeamOfAreaBoss edit(Long id, List<TechnicalPersonal> technicalPersonalList, Area area) throws Exception;        // Update
    TeamOfAreaBoss delete(Long id);          // Delete
    List<TeamOfAreaBoss> getAll();
}
