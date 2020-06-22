package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.TeamOfAreaBossDTO;
import univ.max.kursova.dto.TeamOfAreaBossEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.repository.TeamOfAreaBossRepository;
import univ.max.kursova.service.IAreaService;
import univ.max.kursova.service.ITeamOfAreaBossService;
import univ.max.kursova.service.ITechPersonalService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class TeamOfAreaBossServiceImpl implements ITeamOfAreaBossService {

    @Autowired
    private ITechPersonalService techPersonalService;

    @Autowired
    private TeamOfAreaBossRepository repository;

    @Autowired
    private IAreaService areaService;

    @Override
    @Transactional(readOnly = true)
    public TeamOfAreaBossDTO get(Long id) {
        return TeamOfAreaBossDTO.makeDTO(getEntity(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<TeamOfAreaBossDTO> getAll() {
        return repository.findByOrderByIdTeamAsc().stream().map(TeamOfAreaBossDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public TeamOfAreaBossDTO create(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO) {
        TeamOfAreaBoss teamOfAreaBoss = new TeamOfAreaBoss()
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        teamOfAreaBoss = repository.save(teamOfAreaBoss);

        // Set data from TeamOfAreaBossEditDTO
        setInputData(teamOfAreaBoss, teamOfAreaBossEditDTO);

        return TeamOfAreaBossDTO.makeDTO(repository.save(teamOfAreaBoss));
    }

    @Override
    public TeamOfAreaBossDTO update(TeamOfAreaBossEditDTO teamOfAreaBossEditDTO) {
        if (Objects.isNull(teamOfAreaBossEditDTO.getIdTeam()))
            throw new DataValidationException("ID can not be null!");

        // Get existed TeamOfAreaBoss
        TeamOfAreaBoss teamOfAreaBoss = getEntity(teamOfAreaBossEditDTO.getIdTeam())
                .setDateModified(LocalDateTime.now());

        // Clear related data
        clearRelatedData(teamOfAreaBoss);

        // Set data from TeamOfAreaBossEditDTO
        setInputData(teamOfAreaBoss, teamOfAreaBossEditDTO);

        return TeamOfAreaBossDTO.makeDTO(repository.save(teamOfAreaBoss));
    }

    @Override
    public void delete(Long id) {
        TeamOfAreaBoss teamOfAreaBoss = getEntity(id);

        // Remove current entity from all
        clearRelatedData(teamOfAreaBoss);

        repository.delete(teamOfAreaBoss);
    }

    @Override
    public TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss) {
        return repository.save(teamOfAreaBoss);
    }

    @Override
    public TeamOfAreaBoss getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("TeamOfAreaBoss with id: "
                + id.toString() + " is not existed"));
    }

    private void setInputData(TeamOfAreaBoss teamOfAreaBoss, TeamOfAreaBossEditDTO teamOfAreaBossEditDTO) {
        // Set TechnicalPersonal
        teamOfAreaBoss.getTechnicalPersonalList().clear();
        if (!teamOfAreaBossEditDTO.getTechnicalPersonalIdList().isEmpty()) {
            List<TechnicalPersonal> technicalPersonalList = techPersonalService.getEntitiesByIds(teamOfAreaBossEditDTO.getTechnicalPersonalIdList());
            if (technicalPersonalList.size() != teamOfAreaBossEditDTO.getTechnicalPersonalIdList().size())
                throw new DataValidationException("The TechnicalPersonal ids are wrong!");
            technicalPersonalList.forEach(value -> value.setTeamOfAreaBoss(teamOfAreaBoss));
            teamOfAreaBoss.setTechnicalPersonalList(technicalPersonalList);
        }

        // Set Area
        teamOfAreaBoss.setArea(null);
        if (Objects.nonNull(teamOfAreaBossEditDTO.getIdArea())) {
            Area area = areaService.getEntity(teamOfAreaBossEditDTO.getIdArea());
            TeamOfAreaBoss previousTeam = area.getTeamOfAreaBoss();
            if (Objects.nonNull(previousTeam)) {
                previousTeam.setArea(null);
                repository.save(previousTeam);
            }
            area.setTeamOfAreaBoss(teamOfAreaBoss);
            teamOfAreaBoss.setArea(area);
        }
    }

    private void clearRelatedData(TeamOfAreaBoss teamOfAreaBoss) {
        // Updated TeamOfAreaBoss for all TechnicalPersonals
        List<TechnicalPersonal> technicalPersonalList = teamOfAreaBoss.getTechnicalPersonalList();
        technicalPersonalList.forEach(technicalPersonal -> technicalPersonal.setTeamOfAreaBoss(null));
        techPersonalService.save(technicalPersonalList);

        // Update TeamOfAreaBoss for Area
        if (Objects.nonNull(teamOfAreaBoss.getArea())) {
            Area area = areaService.getEntity(teamOfAreaBoss.getArea().getIdArea());
            area.setTeamOfAreaBoss(null);
            areaService.save(area);
        }
        teamOfAreaBoss.setArea(null);
    }

}
