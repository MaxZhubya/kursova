package univ.max.kursova.service;

import univ.max.kursova.dto.TeamOfAreaBossEditDTO;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;

import java.time.LocalDateTime;
import java.util.List;

public interface ITeamOfAreaBossService {
    //  CRUD
    TeamOfAreaBoss get(Long id);    // Read
    List<TeamOfAreaBoss> getAll();    // Read
    TeamOfAreaBoss create(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO);    // Create
    TeamOfAreaBoss update(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO);    // Update
    void delete(Long id);   // Delete
    TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss);
}
