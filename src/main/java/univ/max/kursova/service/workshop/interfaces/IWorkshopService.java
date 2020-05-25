package univ.max.kursova.service.workshop.interfaces;

import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Workshop;

import java.util.List;

public interface IWorkshopService {
    //  CRUD
    Workshop save(Workshop workshop);        // Create
    Workshop get(Long id) throws Exception;             // Read
    Workshop edit(Long id, List<Area> areaList, List<Laboratory> laboratoryList, String definition) throws Exception;   // Update
    Workshop delete(Long id);          // Delete
    List<Workshop> getAll();
}
