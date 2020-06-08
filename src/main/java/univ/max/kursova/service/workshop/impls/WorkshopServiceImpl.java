package univ.max.kursova.service.workshop.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.WorkshopEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.repository.WorkshopRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.workshop.interfaces.IWorkshopService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class WorkshopServiceImpl implements IWorkshopService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }

    /*---------------------------------------------------*/

    @Autowired
    private WorkshopRepository repository;

    @Override
    public Workshop get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Workshop with id: "
                + id.toString() + "is not existed"));
    }

    @Override
    public List<Workshop> getAll() {
        return repository.findAll();
    }

    @Override
    public Workshop create(WorkshopEditDTO workshopEditDTO) {
        return null;
    }

    @Override
    public Workshop update(WorkshopEditDTO workshopEditDTO) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("Workshop with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public Workshop save(Workshop workshop) {
        return repository.save(workshop);
    }

}
