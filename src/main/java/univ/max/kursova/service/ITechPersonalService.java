package univ.max.kursova.service;

import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.dto.TechnicalPersonalEditDTO;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;

import java.time.LocalDateTime;
import java.util.List;

public interface ITechPersonalService {
    //  CRUD
    TechnicalPersonalDTO get(Long id); // Read
    List<TechnicalPersonalDTO> getAll();   // Read
    TechnicalPersonalDTO create(TechnicalPersonalEditDTO technicalPersonal);   // Create
    TechnicalPersonalDTO update(TechnicalPersonalEditDTO technicalPersonal);   // Update
    void delete(Long id);   // Delete
    TechnicalPersonal save(TechnicalPersonal technicalPersonal);
    List<TechnicalPersonal> save(List<TechnicalPersonal> technicalPersonalList);
    TechnicalPersonal getEntity(Long id);
    List<TechnicalPersonal> getEntitiesByIds(List<Long> ids);
}
