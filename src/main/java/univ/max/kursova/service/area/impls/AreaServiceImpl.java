package univ.max.kursova.service.area.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.area.impls.AreaDaoImpl;
import univ.max.kursova.model.Area;
import univ.max.kursova.service.area.interfaces.IAreaService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class AreaServiceImpl implements IAreaService {

//    @Autowired
//    AreaRepository repository;

    @Autowired
    AreaDaoImpl areaDao;

//    @PostConstruct
//    void init() {
//        List<Area> list = areaDao.getAll();
//        repository.saveAll(list);
//    }

    @Override
    public Area save(Area area) {
        return null;
    }

    @Override
    public Area get(Long id) {
//        return areaDao.getAll().stream().filter(item -> item.getIdArea().equals(id)).findFirst()
//                .orElse(null);
        return null;
    }

    @Override
    public Area edit(Area area) {
        return null;
    }

    @Override
    public Area delete(Long id) {
//        repository.deleteById(id);
//        return repository.findById(id).orElse(null);
        return null;
    }

    @Override
    public List<Area> getAll() {
        //return repository.findAll();
        return areaDao.getAll();
    }
}
