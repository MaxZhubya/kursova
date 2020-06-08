package univ.max.kursova.service.teamOfAreaBoss.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.TeamOfAreaBossEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.ActionType;
import univ.max.kursova.repository.TeamOfAreaBossRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.area.interfaces.IAreaService;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.teamOfAreaBoss.interfaces.ITeamOfAreaBossService;
import univ.max.kursova.service.techPersonal.interfaces.ITechPersonalService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static univ.max.kursova.model.enums.ActionType.CREATE;

@Service
@Transactional
public class TeamOfAreaBossServiceImpl implements ITeamOfAreaBossService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    @Autowired
    private ITechPersonalService techPersonalService;

    @Autowired
    private TeamOfAreaBossRepository repository;

    @Autowired
    private IAreaService areaService;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
    /*--------------------------------------------------------------*/

    @Override
    public TeamOfAreaBoss get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("TeamOfAreaBoss with id: "
                + id.toString() + "is not existed"));
    }

    @Override
    public List<TeamOfAreaBoss> getAll() {
        return repository.findAll();
    }

    @Override
    public TeamOfAreaBoss create(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO) {
        TeamOfAreaBoss teamOfAreaBoss = new TeamOfAreaBoss()
                .setIdTeam(sequenceService.generateSequence(TeamOfAreaBoss.SEQUENCE_NAME))
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        // Set data from TeamOfAreaBossEditDTO
        setTeamOfAreaBossData(teamOfAreaBoss, teamOfAreaBossEditDTO);
        teamOfAreaBoss = repository.save(teamOfAreaBoss);
        // Update all TeamOfAreaBoss related data
        updateRelatedData(teamOfAreaBoss, CREATE);

        return repository.save(teamOfAreaBoss);
    }

    @Override
    public TeamOfAreaBoss update(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO) {
        if (Objects.isNull(teamOfAreaBossEditDTO.getIdTeam()))
            throw new DataValidationException("TeamOfAreaBoss id can not be null!");

        // Get existed TeamOfAreaBoss
        TeamOfAreaBoss teamOfAreaBoss = get(teamOfAreaBossEditDTO.getIdTeam())
                .setDateModified(LocalDateTime.now());

        // Remove current Team from all to handle case if some data was deleted
        updateRelatedData(teamOfAreaBoss, ActionType.DELETE);
        // Set data from TeamOfAreaBossEditDTO
        setTeamOfAreaBossData(teamOfAreaBoss, teamOfAreaBossEditDTO);
        // Update all Team related data
        updateRelatedData(teamOfAreaBoss, ActionType.CREATE);

        return repository.save(teamOfAreaBoss);
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("TeamOfAreaBoss with id: "
                + id.toString() + "is not existed"));
        repository.deleteById(id);
    }

    @Override
    public TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss) {
        return repository.save(teamOfAreaBoss);
    }

    private void setTeamOfAreaBossData(TeamOfAreaBoss teamOfAreaBoss, TeamOfAreaBossEditDTO teamOfAreaBossEditDTO) {
        // Set TechnicalPersonal
        teamOfAreaBoss.getTechnicalPersonalList().clear();
        if (!teamOfAreaBossEditDTO.getTechnicalPersonalIdList().isEmpty()) {
            List<TechnicalPersonal> technicalPersonalList = techPersonalService.getByIds(teamOfAreaBossEditDTO.getTechnicalPersonalIdList());
            if (technicalPersonalList.size() != teamOfAreaBossEditDTO.getTechnicalPersonalIdList().size())
                throw new DataValidationException("The TechnicalPersonal ids are wrong!");
            teamOfAreaBoss.setTechnicalPersonalList(technicalPersonalList);
        }

        // Set Area
        teamOfAreaBoss.setArea(null);
        if (Objects.nonNull(teamOfAreaBossEditDTO.getIdArea())) {
            teamOfAreaBoss.setArea(areaService.get(teamOfAreaBossEditDTO.getIdArea()));
        }
    }

    private void updateRelatedData(TeamOfAreaBoss teamOfAreaBoss, ActionType actionType) {
        // Updated TeamOfAreaBoss for all TechnicalPersonals
        List<TechnicalPersonal> technicalPersonalList = teamOfAreaBoss.getTechnicalPersonalList();
        if (actionType.equals(ActionType.CREATE))
            technicalPersonalList.stream().forEach(technicalPersonal -> {
                // Remove current TechnicalPersonal from previous Team
                if (Objects.nonNull(technicalPersonal.getTeamOfAreaBoss())) {
                    repository.findById(technicalPersonal.getTeamOfAreaBoss().getIdTeam())
                            .ifPresent(currentTeam -> {
                                currentTeam.getTechnicalPersonalList().remove(technicalPersonal);
                                repository.save(currentTeam);
                            });
                }
                technicalPersonal.setTeamOfAreaBoss(teamOfAreaBoss);
            });
        if (actionType.equals(ActionType.DELETE))
            technicalPersonalList.stream().forEach(technicalPersonal -> technicalPersonal.setTeamOfAreaBoss(null));
        techPersonalService.save(technicalPersonalList);

        // Update TeamOfAreaBoss for Area
        Area area = teamOfAreaBoss.getArea();
        if (Objects.nonNull(area)) {
            if (actionType.equals(ActionType.CREATE)) {
                if (Objects.nonNull(area.getTeamOfAreaBoss())) {
                    repository.findById(area.getTeamOfAreaBoss().getIdTeam())
                            .ifPresent(currentTeam -> {
                                currentTeam.setArea(null);
                                repository.save(currentTeam);
                            });
                }
            }
            if (actionType.equals(ActionType.DELETE))
                area.setTeamOfAreaBoss(null);
            areaService.save(area);
        }
    }

}
