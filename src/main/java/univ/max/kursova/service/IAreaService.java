package univ.max.kursova.service;

import univ.max.kursova.dto.AreaEditDTO;
import univ.max.kursova.model.*;

import java.time.LocalDateTime;
import java.util.List;

public interface IAreaService {
    //  CRUD
    Area get(Long id);      // Read
    List<Area> getAll();    // Read
    Area create(AreaEditDTO areaEditDTO);   // Create
    Area update(AreaEditDTO areaEditDTO);   // Update
    void delete(Long id);   // Delete
    Area save(Area area);
}
