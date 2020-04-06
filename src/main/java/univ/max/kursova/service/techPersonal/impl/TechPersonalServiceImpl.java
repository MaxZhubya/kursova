package univ.max.kursova.service.techPersonal.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.repository.TechnicalPersonalRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.techPersonal.interfaces.ITechPersonalService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class TechPersonalServiceImpl implements ITechPersonalService {

    @Autowired
    private TechnicalPersonalRepository repository;

    @Override
    public TechnicalPersonal save(TechnicalPersonal technicalPersonal) {
        return repository.save(technicalPersonal);
    }

    @Override
    public TechnicalPersonal get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechPersonal with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public TechnicalPersonal edit(TechnicalPersonal technicalPersonal) {
        return repository.save(technicalPersonal);
    }

    @Override
    public TechnicalPersonal delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<TechnicalPersonal> getAll() {
        return repository.findAll();
    }
}
