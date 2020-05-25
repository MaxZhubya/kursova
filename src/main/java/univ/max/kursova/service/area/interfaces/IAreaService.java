package univ.max.kursova.service.area.interfaces;

import univ.max.kursova.model.*;

import java.util.List;

public interface IAreaService {
    //  CRUD
    Area save(Area area);        // Create
    Area get(Long id) throws Exception;             // Read
    Area edit(Long id, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, List<Product> productList,
              Workshop workshop, String definition) throws Exception;        // Update
    Area delete(Long id);          // Delete
    List<Area> getAll();
}
