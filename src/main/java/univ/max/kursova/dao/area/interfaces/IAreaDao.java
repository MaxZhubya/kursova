package univ.max.kursova.dao.area.interfaces;

import univ.max.kursova.model.Area;

import java.util.List;

public interface IAreaDao {
    //  CRUD
    Area save(Area area);        // Create
    Area get(long id);             // Read
    Area edit(Area area);        // Update
    Area delete(long id);          // Delete
    List<Area> getAll();
}
