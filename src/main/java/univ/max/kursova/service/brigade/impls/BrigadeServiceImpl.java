package univ.max.kursova.service.brigade.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.repository.BrigadeRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.brigade.interfaces.IBrigadeService;
import univ.max.kursova.service.sequence.SequenceServiceImpl;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BrigadeServiceImpl implements IBrigadeService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    @Autowired
    BrigadeRepository repository;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
    /*---------------------------------------------------*/

    @Override
    public Brigade get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Brigade with id: "
                + id.toString() + "is not existed"));
    }

    @Override
    public List<Brigade> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Brigade> getByIds(List<Long> ids) {
        return repository.getByIdBrigadeIn(ids);
    }

    @Override
    public Brigade create(BrigadeEditDTO brigade) {
        return null;
    }

    @Override
    public Brigade update(BrigadeEditDTO brigade) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("Brigade with id: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public Brigade save(Brigade brigade) {
        return repository.save(brigade);
    }

    @Override
    public List<Brigade> save(List<Brigade> brigadeList) {
        return repository.saveAll(brigadeList);
    }

}
