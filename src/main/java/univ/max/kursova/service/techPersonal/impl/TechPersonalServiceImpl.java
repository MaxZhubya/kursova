package univ.max.kursova.service.techPersonal.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.TechPersonalType;
import univ.max.kursova.repository.TechnicalPersonalRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.techPersonal.interfaces.ITechPersonalService;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TechPersonalServiceImpl implements ITechPersonalService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*------------------------------------------------------------------*/

    @Autowired
    private TechnicalPersonalRepository repository;

    @Override
    public TechnicalPersonal save(Long id, TeamOfAreaBoss teamOfAreaBoss, String personalName,
                                  TechPersonalType techPersonalType, String description, LocalDateTime dateCreated, LocalDateTime dateModified) {
        return repository.save(new TechnicalPersonal().setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                .setTeamOfAreaBoss(teamOfAreaBoss).setPersonalName(personalName)
                .setPersonalType(techPersonalType).setDescription(description));
    }

    @Override
    public TechnicalPersonal get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechnicalPersonal with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public TechnicalPersonal edit(Long id, TeamOfAreaBoss teamOfAreaBoss, String personalName,
                                  TechPersonalType techPersonalType, String description)  throws Exception {

        Optional<TechnicalPersonal> optionalPersonal = repository.findById(id);

        if (optionalPersonal.isPresent()) {
            TechnicalPersonal technicalPersonal = optionalPersonal.get();
            technicalPersonal.setTeamOfAreaBoss(teamOfAreaBoss);
            technicalPersonal.setPersonalName(personalName);
            technicalPersonal.setPersonalType(techPersonalType);
            technicalPersonal.setDescription(description);
            return repository.save(technicalPersonal);
        } else {
            throw new Exception("Current TechnicalPersonal doesn't exist in DB");
        }
    }

    @Override
    public void delete(Long id) throws Exception {
        repository.findById(id).orElseThrow(() -> new Exception("TechnicalPersonal with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public List<TechnicalPersonal> getAll() {
        return repository.findAll();
    }

    public void create(TechnicalPersonal technicalPersonal) {
        save(technicalPersonal.getIdTechPersonal(), technicalPersonal.getTeamOfAreaBoss(), technicalPersonal.getPersonalName(), technicalPersonal.getPersonalType(),
                technicalPersonal.getDescription(), technicalPersonal.getDateCreated(), technicalPersonal.getDateModified());
    }
}
