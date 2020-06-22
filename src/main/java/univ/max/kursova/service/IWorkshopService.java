package univ.max.kursova.service;

import univ.max.kursova.dto.WorkshopDTO;
import univ.max.kursova.dto.WorkshopEditDTO;
import univ.max.kursova.model.Workshop;

import java.util.List;

public interface IWorkshopService {
    //  CRUD
    WorkshopDTO get(Long id);  // Read
    List<WorkshopDTO> getAll();    // Read
    WorkshopDTO create(WorkshopEditDTO workshopEditDTO);    // Create
    WorkshopDTO update(WorkshopEditDTO workshopEditDTO);   // Update
    void delete(Long id);   // Delete
    Workshop save(Workshop workshop);
    List<Workshop> save(List<Workshop> workshopList);
    Workshop getEntity(Long id);
    List<Workshop> getEntitiesByIds(List<Long> ids);
}
