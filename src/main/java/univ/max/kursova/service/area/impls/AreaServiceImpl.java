package univ.max.kursova.service.area.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.area.impls.AreaDaoImpl;
import univ.max.kursova.model.Area;
import univ.max.kursova.service.area.interfaces.IAreaService;

import java.util.List;

@Service
public class AreaServiceImpl implements IAreaService {
    @Autowired
    AreaDaoImpl areaDao;

    @Override
    public Area save(Area area) {
        return null;
    }

    @Override
    public Area get(long id) {
        return null;
    }

    @Override
    public Area edit(Area area) {
        return null;
    }

    @Override
    public Area delete(long id) {
        return null;
    }

    @Override
    public List<Area> getAll() {
        return areaDao.getAll();
    }
}
