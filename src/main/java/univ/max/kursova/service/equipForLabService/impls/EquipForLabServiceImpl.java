package univ.max.kursova.service.equipForLabService.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.repository.EquipmentForLabRepository;
import univ.max.kursova.service.equipForLabService.interfaces.IEquipForLabService;

import java.util.List;

@Service
public class EquipForLabServiceImpl implements IEquipForLabService {

    @Autowired
    private EquipmentForLabRepository repository;

    @Override
    public EquipmentForLaboratory save(EquipmentForLaboratory equipmentForLaboratory) {
        return repository.save(equipmentForLaboratory);
    }

    @Override
    public EquipmentForLaboratory get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechPersonal with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public EquipmentForLaboratory edit(EquipmentForLaboratory equipmentForLaboratory) {
        return repository.save(equipmentForLaboratory);
    }

    @Override
    public EquipmentForLaboratory delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<EquipmentForLaboratory> getAll() {
        return repository.findAll();
    }
}
