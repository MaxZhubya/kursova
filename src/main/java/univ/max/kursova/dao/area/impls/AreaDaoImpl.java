package univ.max.kursova.dao.area.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import univ.max.kursova.dao.area.interfaces.IAreaDao;
import univ.max.kursova.dataSet.DataSet;
import univ.max.kursova.model.Area;

import java.util.List;

@Component
public class AreaDaoImpl implements IAreaDao {

//    @Autowired
//    DataSet dataSet;

    @Override
    public Area save(Area area) {
        return null;
    }

    @Override
    public Area get(Long id) {
        return null;
    }

    @Override
    public Area edit(Area area) {
        return null;
    }

    @Override
    public Area delete(Long id) {
        return null;
    }

    @Override
    public List<Area> getAll() {
        return null;
    }
}
