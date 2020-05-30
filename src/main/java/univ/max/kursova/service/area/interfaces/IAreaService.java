package univ.max.kursova.service.area.interfaces;

import univ.max.kursova.model.*;

import java.time.LocalDateTime;
import java.util.List;

public interface IAreaService {
    //  CRUD
    Area save(Long id, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, List<Product> productList,
              Workshop workshop, String definition, LocalDateTime dateCreated, LocalDateTime dateModified);        // Create
    Area get(Long id) throws Exception;             // Read
    Area edit(Long id, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, List<Product> productList,
              Workshop workshop, String definition) throws Exception;        // Update
    void delete(Long id) throws Exception;          // Delete
    List<Area> getAll();
}
