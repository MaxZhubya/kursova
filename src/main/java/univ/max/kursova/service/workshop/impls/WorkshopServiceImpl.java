package univ.max.kursova.service.workshop.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.repository.WorkshopRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.workshop.interfaces.IWorkshopService;

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
    public Workshop save(Long id, List<Area> areaList, List<Laboratory> laboratoryList, String definition) {
        return repository.save(new Workshop().setIdWorkshop(getId(Workshop.SEQUENCE_NAME)).setAreaList(areaList)
                .setLaboratoryList(laboratoryList).setDefinition(definition));
    }

    @Override
    public Workshop get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechPersonal with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Workshop edit(Long id, List<Area> areaList, List<Laboratory> laboratoryList, String definition) throws Exception {
        Optional<Workshop> optionalWorkshop = repository.findById(id);

        if (optionalWorkshop.isPresent()) {
            Workshop workshop = optionalWorkshop.get();
            workshop.setAreaList(areaList);
            workshop.setLaboratoryList(laboratoryList);
            workshop.setDefinition(definition);
            return repository.save(workshop);
        } else {
            throw new Exception("Current Workshop does't exist in DB");
        }
    }

    @Override
    public Workshop delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Workshop> getAll() {
        return repository.findAll();
    }
}
