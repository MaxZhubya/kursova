package univ.max.kursova.service.equipForLabService.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.equipForLab.impls.EquipForLabDaoImpl;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.service.equipForLabService.interfaces.IEquipForLabService;

import java.util.List;

@Service
public class EquipForLabServiceImpl implements IEquipForLabService {
    @Autowired
    EquipForLabDaoImpl equipForLabDao;

    @Override
    public EquipmentForLaboratory save(EquipmentForLaboratory equipmentForLaboratory) {
        return null;
    }

    @Override
    public EquipmentForLaboratory get(Long id) {
        return null;
    }

    @Override
    public EquipmentForLaboratory edit(EquipmentForLaboratory equipmentForLaboratory) {
        return null;
    }

    @Override
    public EquipmentForLaboratory delete(Long id) {
        return null;
    }

    @Override
    public List<EquipmentForLaboratory> getAll() {
        return equipForLabDao.getAll();
    }
}
