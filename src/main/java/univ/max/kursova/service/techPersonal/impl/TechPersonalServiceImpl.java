package univ.max.kursova.service.techPersonal.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.techPersonal.impls.TechPersonalDaoImpl;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.repository.TechnicalPersonalRepository;
import univ.max.kursova.service.techPersonal.interfaces.ITechPersonalService;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Service
public class TechPersonalServiceImpl implements ITechPersonalService {

    @Autowired
    TechPersonalDaoImpl techPersonalDao;

    @Autowired
    TechnicalPersonalRepository repository;

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
    public Optional<TechnicalPersonal> get(long id) {
        return repository.findById(id);
    }

    @Override
    public TechnicalPersonal edit(TechnicalPersonal technicalPersonal) {
        return null;
    }

    @Override
    public TechnicalPersonal delete(long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<TechnicalPersonal> getAll() {
        return repository.findAll();
    }
}
