package univ.max.kursova.service;

import univ.max.kursova.dto.WorkshopEditDTO;
import univ.max.kursova.model.Workshop;

import java.util.List;

public interface IWorkshopService {
    //  CRUD
    Workshop get(Long id);  // Read
    List<Workshop> getAll();    // Read
    Workshop create(WorkshopEditDTO workshopEditDTO);    // Create
    Workshop update(WorkshopEditDTO workshopEditDTO);   // Update
    void delete(Long id);   // Delete
    Workshop save(Workshop workshop);
    List<Workshop> save(List<Workshop> workshopList);
    List<Workshop> getEntitiesByIds(List<Long> ids);
}
