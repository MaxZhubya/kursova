package univ.max.kursova.service.brigade.interfaces;

import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.model.Brigade;
import java.util.List;

public interface IBrigadeService {
    //  CRUD
    Brigade get(Long id);   // Read
    List<Brigade> getAll(); // Read
    List<Brigade> getByIds(List<Long> ids); // Read
    Brigade create(BrigadeEditDTO brigade); // Create
    Brigade update(BrigadeEditDTO brigade); // Update
    void delete(Long id);   // Delete
    Brigade save(Brigade brigade);
    List<Brigade> save(List<Brigade> brigadeList);
}
