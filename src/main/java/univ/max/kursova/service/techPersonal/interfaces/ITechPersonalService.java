package univ.max.kursova.service.techPersonal.interfaces;

import univ.max.kursova.model.TechnicalPersonal;

import java.util.List;

public interface ITechPersonalService {
    //  CRUD
    TechnicalPersonal save(TechnicalPersonal technicalPersonal);        // Create
    TechnicalPersonal get(long id);                                   // Read
    TechnicalPersonal edit(TechnicalPersonal technicalPersonal);        // Update
    TechnicalPersonal delete(long id);                                // Delete
    List<TechnicalPersonal> getAll();
}
