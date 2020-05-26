package univ.max.kursova.service.laboratory.interfaces;

import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;

import java.util.List;

public interface ILaboratoryService {
    //  CRUD
    Laboratory save(Long id, List<EquipmentForLaboratory> equipmentForLabList,
                    List<Product> productList, List<Workshop> workshopList, String definition);        // Create
    Laboratory get(Long id) throws Exception;             // Read
    Laboratory edit(Long id, List<EquipmentForLaboratory> equipmentForLabList,
                    List<Product> productList, List<Workshop> workshopList, String definition) throws Exception;        // Update
    Laboratory delete(Long id);          // Delete
    List<Laboratory> getAll();
}
