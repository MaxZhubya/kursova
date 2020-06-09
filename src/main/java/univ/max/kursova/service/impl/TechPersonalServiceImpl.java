package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.TechnicalPersonalEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.repository.TechnicalPersonalRepository;
import univ.max.kursova.service.ITechPersonalService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TechPersonalServiceImpl implements ITechPersonalService {

    @Autowired
    private TechnicalPersonalRepository repository;

    @Override
    public TechnicalPersonal get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("TechnicalPersonal with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<TechnicalPersonal> getAll() {
        return repository.findAll();
    }

    @Override
    public List<TechnicalPersonal> getByIds(List<Long> ids) {
        return repository.getByIdTechPersonalIn(ids);
    }

    @Override
    public TechnicalPersonal create(TechnicalPersonalEditDTO technicalPersonal) {
        return null;
    }

    @Override
    public TechnicalPersonal update(TechnicalPersonalEditDTO technicalPersonal) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("TechnicalPersonal with id: "
                + id.toString() + " is not existed"));
        repository.deleteById(id);
    }

    @Override
    public TechnicalPersonal save(TechnicalPersonal technicalPersonal) {
        return repository.save(technicalPersonal);
    }

    @Override
    public List<TechnicalPersonal> save(List<TechnicalPersonal> technicalPersonalList) {
        return repository.saveAll(technicalPersonalList);
    }

}
