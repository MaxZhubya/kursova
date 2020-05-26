package univ.max.kursova.service.area.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.*;
import univ.max.kursova.repository.AreaRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.area.interfaces.IAreaService;
import univ.max.kursova.service.sequence.SequenceServiceImpl;

import javax.annotation.PostConstruct;
import javax.sound.midi.Sequence;
import java.util.List;
import java.util.Optional;

@Service
public class AreaServiceImpl implements IAreaService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*----------------------------------------------------------------*/

    @Autowired
    private AreaRepository repository;

    @Override
    public Area save(Long id, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, List<Product> productList,
                     Workshop workshop, String definition) {

        return repository.save(new Area().setIdArea(getId(Area.SEQUENCE_NAME)).setTeamOfAreaBoss(teamOfAreaBoss)
                .setBrigadeList(brigadeList).setProductList(productList).setWorkshop(workshop).setDefinition(definition));
    }

    @Override
    public Area get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Area edit(Long id, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, List<Product> productList,
                     Workshop workshop, String definition) throws Exception {
        Optional<Area> optionalArea = repository.findById(id);

        if (optionalArea.isPresent()) {
            Area area = optionalArea.get();
            area.setTeamOfAreaBoss(teamOfAreaBoss);
            area.setBrigadeList(brigadeList);
            area.setProductList(productList);
            area.setWorkshop(workshop);
            area.setDefinition(definition);
            return repository.save(area);
        } else {
            throw new Exception("Current Area doesn't exist");
        }
    }

    @Override
    public Area delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Area> getAll() {
        return repository.findAll();
    }
}
