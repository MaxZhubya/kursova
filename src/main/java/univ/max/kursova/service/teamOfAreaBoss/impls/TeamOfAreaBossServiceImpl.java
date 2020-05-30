package univ.max.kursova.service.teamOfAreaBoss.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.repository.TeamOfAreaBossRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.teamOfAreaBoss.interfaces.ITeamOfAreaBossService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TeamOfAreaBossServiceImpl implements ITeamOfAreaBossService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
/*--------------------------------------------------------------*/

    @Autowired
    private TeamOfAreaBossRepository repository;

    @Override
    public TeamOfAreaBoss save(Long id, List<TechnicalPersonal> technicalPersonalList, Area area, LocalDateTime dateCreated, LocalDateTime dateModified) {
        return repository.save(new TeamOfAreaBoss().setIdTeam(getId(TeamOfAreaBoss.SEQUENCE_NAME))
                .setTechnicalPersonalList(technicalPersonalList).setArea(area).setDateCreated(dateCreated).setDateModified(dateModified));
    }

    @Override
    public TeamOfAreaBoss get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public TeamOfAreaBoss edit(Long id, List<TechnicalPersonal> technicalPersonalList, Area area) throws Exception {
        Optional<TeamOfAreaBoss> optionalTeam = repository.findById(id);

        if (optionalTeam.isPresent()) {
            TeamOfAreaBoss teamOfAreaBoss = optionalTeam.get();
            teamOfAreaBoss.setTechnicalPersonalList(technicalPersonalList);
            teamOfAreaBoss.setArea(area);
            return repository.save(teamOfAreaBoss);
        } else {
            throw new Exception("Current TeamOfAreaBoss doesn't exist");
        }
    }

    @Override
    public void delete(Long id) throws Exception {
        repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public List<TeamOfAreaBoss> getAll() {
        return repository.findAll();
    }

    public void create(TeamOfAreaBoss teamOfAreaBoss) {
        save(teamOfAreaBoss.getIdTeam(), teamOfAreaBoss.getTechnicalPersonalList(), teamOfAreaBoss.getArea(),
                teamOfAreaBoss.getDateCreated(), teamOfAreaBoss.getDateModified());
    }
}
