package univ.max.kursova.service.area.interfaces;

import univ.max.kursova.model.Area;

import java.util.List;

public interface IAreaService {
    //  CRUD
    Area save(Area area);        // Create
    Area get(Long id) throws Exception;             // Read
    Area edit(Area area);        // Update
    Area delete(Long id);          // Delete
    List<Area> getAll();
}
