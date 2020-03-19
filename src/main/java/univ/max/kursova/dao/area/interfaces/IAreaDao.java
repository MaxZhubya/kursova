package univ.max.kursova.dao.area.interfaces;

import univ.max.kursova.model.Area;

import java.util.List;

public interface IAreaDao {
    //  CRUD
    Area save(Area area);        // Create
    Area get(Long id);             // Read
    Area edit(Area area);        // Update
    Area delete(Long id);          // Delete
    List<Area> getAll();
}
