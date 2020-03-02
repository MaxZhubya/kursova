package univ.max.kursova.dao.techPersonal.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import univ.max.kursova.dao.techPersonal.interfaces.ITechPersonalDao;
import univ.max.kursova.dataSet.DataSet;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.PersonalType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class TechPersonalDaoImpl implements ITechPersonalDao {
    @Autowired
    DataSet dataSet;

    @Override
    public TechnicalPersonal save(TechnicalPersonal technicalPersonal) {
        return null;
    }

    @Override
    public TechnicalPersonal get(long id) {
        return null;
    }

    @Override
    public TechnicalPersonal edit(TechnicalPersonal technicalPersonal) {
        return null;
    }

    @Override
    public TechnicalPersonal delete(long id) {
        return null;
    }

    @Override
    public List<TechnicalPersonal> getAll() {
        return dataSet.getTechnicalPersonalList();
    }
}
