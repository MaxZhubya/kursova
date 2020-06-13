package univ.max.kursova.service;

import univ.max.kursova.dto.TeamOfAreaBossDTO;
import univ.max.kursova.dto.TeamOfAreaBossEditDTO;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;

import java.time.LocalDateTime;
import java.util.List;

public interface ITeamOfAreaBossService {
    //  CRUD
    TeamOfAreaBossDTO get(Long id);    // Read
    List<TeamOfAreaBossDTO> getAll();    // Read
    TeamOfAreaBossDTO create(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO);    // Create
    TeamOfAreaBossDTO update(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO);    // Update
    void delete(Long id);   // Delete
    TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss);
    TeamOfAreaBoss getEntity(Long id);
}
