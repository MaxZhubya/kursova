package univ.max.kursova.service.equipForLabService.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.enums.EquipmentType;
import univ.max.kursova.repository.EquipmentForLabRepository;
import univ.max.kursova.service.equipForLabService.interfaces.IEquipForLabService;
import univ.max.kursova.service.sequence.SequenceServiceImpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class EquipForLabServiceImpl implements IEquipForLabService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*----------------------------------------------------*/

    @Autowired
    private EquipmentForLabRepository repository;

    @Override
    public EquipmentForLaboratory save(Long id, Laboratory laboratory, EquipmentType equipmentType, String definition,
                                       LocalDateTime dateCreated, LocalDateTime dateModified) {
        return repository.save(new EquipmentForLaboratory().setIdEquipmentForLab(getId(EquipmentForLaboratory.SEQUENCE_NAME))
            .setLaboratory(laboratory).setEquipmentType(equipmentType).setDefinition(definition).setDateCreated(dateCreated).setDateModified(dateModified));
    }

    @Override
    public EquipmentForLaboratory get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("EquipmentForLaboratory with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public EquipmentForLaboratory edit(Long id, Laboratory laboratory, EquipmentType equipmentType, String definition) throws Exception {
        Optional<EquipmentForLaboratory> optionalEquipment = repository.findById(id);

        if (optionalEquipment.isPresent()) {
            EquipmentForLaboratory equipmentForLaboratory = optionalEquipment.get();
            equipmentForLaboratory.setLaboratory(laboratory);
            equipmentForLaboratory.setEquipmentType(equipmentType);
            equipmentForLaboratory.setDefinition(definition);
            return repository.save(equipmentForLaboratory);
        } else {
            throw new Exception("Current EquipmentForLaboratory doesn't exist");
        }
    }

    @Override
    public void delete(Long id) throws Exception {
        repository.findById(id).orElseThrow(() -> new Exception("EquipmentForLaboratory with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public List<EquipmentForLaboratory> getAll() {
        return repository.findAll();
    }

    public void create(EquipmentForLaboratory equipment) {
        save(equipment.getIdEquipmentForLab(), equipment.getLaboratory(), equipment.getEquipmentType(), equipment.getDefinition(),
                equipment.getDateCreated(), equipment.getDateModified());
    }
}
