package univ.max.kursova.service;

import univ.max.kursova.dto.AreaDTO;
import univ.max.kursova.dto.AreaEditDTO;
import univ.max.kursova.model.*;

import java.time.LocalDateTime;
import java.util.List;

public interface IAreaService {
    //  CRUD
    AreaDTO get(Long id);      // Read
    List<AreaDTO> getAll();    // Read
    AreaDTO create(AreaEditDTO areaEditDTO);   // Create
    AreaDTO update(AreaEditDTO areaEditDTO);   // Update
    void delete(Long id);   // Delete
    Area save(Area area);
    Area getEntity(Long id);
    List<Area> getEntitiesByIds(List<Long> ids);
}
