package univ.max.kursova.dao.brigade.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import univ.max.kursova.dao.brigade.interfaces.IBrigadeDao;
import univ.max.kursova.dataSet.DataSet;
import univ.max.kursova.model.Brigade;

import java.util.List;

@Component
public class BrigadeDaoImpl implements IBrigadeDao {

    @Autowired
    DataSet dataSet;

    @Override
    public Brigade save(Brigade brigade) {
        dataSet.getBrigadeList().add(brigade);
        return brigade;
    }

    @Override
    public Brigade get(Long id) {
        return null;
    }

    @Override
    public Brigade edit(Brigade brigade) {
        return null;
    }

    @Override
    public Brigade delete(Long id) {
        return null;
    }

    @Override
    public List<Brigade> getAll() {
        return dataSet.getBrigadeList();
    }
}
