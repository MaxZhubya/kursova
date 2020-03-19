package univ.max.kursova.service.techPersonal.interfaces;

import univ.max.kursova.model.TechnicalPersonal;

import java.util.List;

public interface ITechPersonalService {
    //  CRUD
    TechnicalPersonal save(TechnicalPersonal technicalPersonal);        // Create
    TechnicalPersonal get(Long id);                                   // Read
    TechnicalPersonal edit(TechnicalPersonal technicalPersonal);        // Update
    TechnicalPersonal delete(Long id);                                // Delete
    List<TechnicalPersonal> getAll();
}
