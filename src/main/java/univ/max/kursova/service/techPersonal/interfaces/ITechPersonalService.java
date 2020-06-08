package univ.max.kursova.service.techPersonal.interfaces;

import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.dto.TechnicalPersonalEditDTO;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;

import java.time.LocalDateTime;
import java.util.List;

public interface ITechPersonalService {
    //  CRUD
    TechnicalPersonal get(Long id); // Read
    List<TechnicalPersonal> getAll();   // Read
    List<TechnicalPersonal> getByIds(List<Long> ids);   // Read
    TechnicalPersonal create(TechnicalPersonalEditDTO technicalPersonal);   // Create
    TechnicalPersonal update(TechnicalPersonalEditDTO technicalPersonal);   // Update
    void delete(Long id);   // Delete
    TechnicalPersonal save(TechnicalPersonal technicalPersonal);
    List<TechnicalPersonal> save(List<TechnicalPersonal> technicalPersonalList);
}
