package univ.max.kursova.service.techPersonal.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.TechnicalPersonalEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;
import univ.max.kursova.repository.TechnicalPersonalRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.techPersonal.interfaces.ITechPersonalService;

import javax.annotation.PostConstruct;
import javax.xml.crypto.Data;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TechPersonalServiceImpl implements ITechPersonalService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    @Autowired
    private TechnicalPersonalRepository repository;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
    /*------------------------------------------------------------------*/

    @Override
    public TechnicalPersonal get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("TechnicalPersonal with id: "
                + id.toString() + "is not existed"));
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
                + id.toString() + "is not existed"));
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
