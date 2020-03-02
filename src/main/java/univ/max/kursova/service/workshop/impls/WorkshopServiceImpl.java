package univ.max.kursova.service.workshop.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.workshop.impls.WorkshopDaoImpl;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.service.workshop.interfaces.IWorkshopService;

import java.util.List;

@Service
public class WorkshopServiceImpl implements IWorkshopService {
    @Autowired
    WorkshopDaoImpl workshopDao;

    @Override
    public Workshop save(Workshop workshop) {
        return null;
    }

    @Override
    public Workshop get(long id) {
        return null;
    }

    @Override
    public Workshop edit(Workshop workshop) {
        return null;
    }

    @Override
    public Workshop delete(long id) {
        return null;
    }

    @Override
    public List<Workshop> getAll() {
        return workshopDao.getAll();
    }
}
