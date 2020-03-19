package univ.max.kursova.service.techPersonal.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.techPersonal.impls.TechPersonalDaoImpl;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.service.techPersonal.interfaces.ITechPersonalService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class TechPersonalServiceImpl implements ITechPersonalService {

    @Autowired
    TechPersonalDaoImpl techPersonalDao;

//    @Autowired
//    TechnicalPersonalRepository repository;

    @PostConstruct
    void init() {
        List<TechnicalPersonal> list = techPersonalDao.getAll();
        // repository.saveAll(list);
    }

    @Override
    public TechnicalPersonal save(TechnicalPersonal technicalPersonal) {
        return null;
    }

    @Override
    public TechnicalPersonal get(Long id) {
        return techPersonalDao.getAll().stream().filter(item -> item.getIdTechPersonal().equals(id))
                .findFirst().orElse(null);
    }

    @Override
    public TechnicalPersonal edit(TechnicalPersonal technicalPersonal) {
        return null;
    }

    @Override
    public TechnicalPersonal delete(Long id) {
        TechnicalPersonal technicalPersonal = this.get(id);
        techPersonalDao.getAll().remove(technicalPersonal);
        return technicalPersonal;
    }

    @Override
    public List<TechnicalPersonal> getAll() {
        return techPersonalDao.getAll();
    }
}
