package univ.max.kursova.service.laboratory.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.repository.LaboratoryRepository;
import univ.max.kursova.service.laboratory.interfaces.ILaboratoryService;

import java.util.List;
import java.util.Optional;

@Service
public class LaboratoryServiceImpl implements ILaboratoryService {

    @Autowired
    private LaboratoryRepository repository;

    @Override
    public Laboratory save(Laboratory laboratory) {
        return repository.save(laboratory);
    }

    @Override
    public Laboratory get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechPersonal with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Laboratory edit(Long id, List<EquipmentForLaboratory> equipmentForLabList,
                           List<Product> productList, List<Workshop> workshopList, String definition) throws Exception {
        Optional<Laboratory> optionalLaboratory = repository.findById(id);

        if (optionalLaboratory.isPresent()) {
            Laboratory laboratory = optionalLaboratory.get();
            laboratory.setEquipmentForLaboratoryList(equipmentForLabList);
            laboratory.setProductList(productList);
            laboratory.setWorkshopList(workshopList);
            laboratory.setDefinition(definition);
            return repository.save(laboratory);
        } else {
            throw new Exception("Current Laboratory doesn't exist");
        }
    }

    @Override
    public Laboratory delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Laboratory> getAll() {
        return repository.findAll();
    }
}
