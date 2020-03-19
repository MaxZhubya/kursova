package univ.max.kursova.service.laboratory.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.laboratory.impls.LaboratoryDaoImpl;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.service.laboratory.interfaces.ILaboratoryService;

import java.util.List;

@Service
public class LaboratoryServiceImpl implements ILaboratoryService {
    @Autowired
    LaboratoryDaoImpl laboratoryDao;

    @Override
    public Laboratory save(Laboratory laboratory) {
        return null;
    }

    @Override
    public Laboratory get(Long id) {
        return null;
    }

    @Override
    public Laboratory edit(Laboratory laboratory) {
        return null;
    }

    @Override
    public Laboratory delete(Long id) {
        return null;
    }

    @Override
    public List<Laboratory> getAll() {
        return laboratoryDao.getAll();
    }
}
