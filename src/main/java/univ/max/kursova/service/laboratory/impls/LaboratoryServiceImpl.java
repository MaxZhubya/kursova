package univ.max.kursova.service.laboratory.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.repository.LaboratoryRepository;
import univ.max.kursova.service.laboratory.interfaces.ILaboratoryService;
import univ.max.kursova.service.sequence.SequenceServiceImpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class LaboratoryServiceImpl implements ILaboratoryService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*------------------------------------------------------*/

    @Autowired
    private LaboratoryRepository repository;

    @Override
    public Laboratory save(Long id, List<EquipmentForLaboratory> equipmentForLabList, List<Product> productList,
                           List<Workshop> workshopList, String definition, LocalDateTime dateCreated, LocalDateTime dateModified) {
        return repository.save(new Laboratory().setIdLaboratory(getId(Laboratory.SEQUENCE_NAME))
                .setEquipmentForLaboratoryList(equipmentForLabList).setProductList(productList).setWorkshopList(workshopList)
                .setDefinition(definition).setDateCreated(dateCreated).setDateModified(dateModified));
    }

    @Override
    public Laboratory get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Laboratory with is: "
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
    public void delete(Long id) throws Exception {
        repository.findById(id).orElseThrow(() -> new Exception("Laboratory with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public List<Laboratory> getAll() {
        return repository.findAll();
    }

    public void create(Laboratory laboratory) {
        save(laboratory.getIdLaboratory(), laboratory.getEquipmentForLaboratoryList(), laboratory.getProductList(),
                laboratory.getWorkshopList(), laboratory.getDefinition(), laboratory.getDateCreated(), laboratory.getDateModified());
    }
}
