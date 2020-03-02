package univ.max.kursova.service.techPersonal.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.techPersonal.impls.TechPersonalDaoImpl;
import univ.max.kursova.dao.techPersonal.interfaces.ITechPersonalDao;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.service.techPersonal.interfaces.ITechPersonalService;

import java.util.List;

@Service
public class TechPersonalServiceImpl implements ITechPersonalService {
    @Autowired
    TechPersonalDaoImpl techPersonalDao;

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
        return techPersonalDao.getAll();
    }
}
