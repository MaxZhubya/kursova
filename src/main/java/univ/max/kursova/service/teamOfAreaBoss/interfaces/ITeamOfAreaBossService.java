package univ.max.kursova.service.teamOfAreaBoss.interfaces;

import univ.max.kursova.model.TeamOfAreaBoss;

import java.util.List;

public interface ITeamOfAreaBossService {
    //  CRUD
    TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss);        // Create
    TeamOfAreaBoss get(Long id);             // Read
    TeamOfAreaBoss edit(TeamOfAreaBoss teamOfAreaBoss);        // Update
    TeamOfAreaBoss delete(Long id);          // Delete
    List<TeamOfAreaBoss> getAll();
}
