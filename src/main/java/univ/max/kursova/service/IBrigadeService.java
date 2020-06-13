package univ.max.kursova.service;

import univ.max.kursova.dto.BrigadeDTO;
import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.model.Brigade;
import java.util.List;

public interface IBrigadeService {
    //  CRUD
    BrigadeDTO get(Long id);   // Read
    List<BrigadeDTO> getAll(); // Read
    BrigadeDTO create(BrigadeEditDTO brigade); // Create
    BrigadeDTO update(BrigadeEditDTO brigade); // Update
    void delete(Long id);   // Delete
    Brigade save(Brigade brigade);
    List<Brigade> save(List<Brigade> brigadeList);
    Brigade getEntity(Long id);
    List<Brigade> getEntitiesByIds(List<Long> ids);
}
