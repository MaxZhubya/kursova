package univ.max.kursova.dao.techPersonal.interfaces;

import univ.max.kursova.model.TechnicalPersonal;

import java.util.List;

public interface ITechPersonalDao {
    //  CRUD
    TechnicalPersonal save(TechnicalPersonal technicalPersonal);        // Create
    TechnicalPersonal get(long id);                                   // Read
    TechnicalPersonal edit(TechnicalPersonal technicalPersonal);        // Update
    TechnicalPersonal delete(long id);                                // Delete
    List<TechnicalPersonal> getAll();
}
