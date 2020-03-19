package univ.max.kursova.dao.teamOfAreaBoss.interfaces;

import univ.max.kursova.model.TeamOfAreaBoss;

import java.util.List;

public interface ITeamOfAreaBossDao {
    //  CRUD
    TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss);        // Create
    TeamOfAreaBoss get(Long id);             // Read
    TeamOfAreaBoss edit(TeamOfAreaBoss teamOfAreaBoss);        // Update
    TeamOfAreaBoss delete(Long id);          // Delete
    List<TeamOfAreaBoss> getAll();
}
