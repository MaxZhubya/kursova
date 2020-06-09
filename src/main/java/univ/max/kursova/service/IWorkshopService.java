package univ.max.kursova.service;

import univ.max.kursova.dto.ProductEditDTO;
import univ.max.kursova.dto.WorkshopEditDTO;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;

import java.time.LocalDateTime;
import java.util.List;

public interface IWorkshopService {
    //  CRUD
    Workshop get(Long id);  // Read
    List<Workshop> getAll();    // Read
    Workshop create(WorkshopEditDTO workshopEditDTO);    // Create
    Workshop update(WorkshopEditDTO workshopEditDTO);   // Update
    void delete(Long id);   // Delete
    Workshop save(Workshop workshop);
}
