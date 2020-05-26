package univ.max.kursova.service.techPersonal.interfaces;

import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;

import java.util.List;

public interface ITechPersonalService {
    //  CRUD
    TechnicalPersonal save(Long id, TeamOfAreaBoss teamOfAreaBoss, String personalName,
                           TechPersonalType techPersonalType, String description);        // Create
    TechnicalPersonal get(Long id) throws Exception;                                   // Read
    TechnicalPersonal edit(Long id, TeamOfAreaBoss teamOfAreaBoss, String personalName,
                           TechPersonalType techPersonalType, String description) throws Exception;        // Update
    TechnicalPersonal delete(Long id);                                // Delete
    List<TechnicalPersonal> getAll();
}
