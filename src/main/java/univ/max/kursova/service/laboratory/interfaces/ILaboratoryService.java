package univ.max.kursova.service.laboratory.interfaces;

import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;

import java.time.LocalDateTime;
import java.util.List;

public interface ILaboratoryService {
    //  CRUD
    Laboratory save(Long id, List<EquipmentForLaboratory> equipmentForLabList, List<Product> productList,
                    List<Workshop> workshopList, String definition, LocalDateTime dateCreated, LocalDateTime dateModified);        // Create
    Laboratory get(Long id) throws Exception;             // Read
    Laboratory edit(Long id, List<EquipmentForLaboratory> equipmentForLabList,
                    List<Product> productList, List<Workshop> workshopList, String definition) throws Exception;        // Update
    void delete(Long id) throws Exception;          // Delete
    List<Laboratory> getAll();
}
