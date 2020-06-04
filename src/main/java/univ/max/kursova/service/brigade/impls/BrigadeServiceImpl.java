package univ.max.kursova.service.brigade.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*---------------------------------------------------*/

    @Autowired
    BrigadeRepository repository;

    @Override
    public Brigade save(Long id, List<Worker> workerList, Area area, LocalDateTime dateCreated, LocalDateTime dateModified) {
        return repository.save(new Brigade().setIdBrigade(getId(Brigade.SEQUENCE_NAME)).setWorkerList(workerList).setArea(area)
            .setDateCreated(dateCreated).setDateModified(dateModified));
    }

    @Override
    public Brigade get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Brigade with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Brigade edit(Long id, List<Worker> workerList, Area area) throws Exception {
        Optional<Brigade> optionalBrigade = repository.findById(id);

        if (optionalBrigade.isPresent()) {
            Brigade brigade = optionalBrigade.get();
            brigade.setWorkerList(workerList);
            brigade.setArea(area);
            return repository.save(brigade);
        } else {
            throw new Exception("Current Brigade doesn't exist");
        }
    }

    @Override
    public void delete(Long id) throws Exception {
        repository.findById(id).orElseThrow(() -> new Exception("Brigade with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public List<Brigade> getAll() {
        return repository.findAll();
    }

    public void create(Brigade brigade) {
        save(brigade.getIdBrigade(), brigade.getWorkerList(), brigade.getArea(), brigade.getDateCreated(), brigade.getDateModified());
    }
}
