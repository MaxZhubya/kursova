package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.dto.TechnicalPersonalEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.repository.TechnicalPersonalRepository;
import univ.max.kursova.service.ITeamOfAreaBossService;
import univ.max.kursova.service.ITechPersonalService;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class TechPersonalServiceImpl implements ITechPersonalService {

    @Autowired
    private TechnicalPersonalRepository repository;

    @Autowired
    private ITeamOfAreaBossService teamOfAreaBossService;

    @Override
    @Transactional(readOnly = true)
    public TechnicalPersonalDTO get(Long id) {
        return TechnicalPersonalDTO.makeDTO(getEntity(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<TechnicalPersonalDTO> getAll() {
        return repository.findByOrderByIdTechPersonalAsc().stream().map(TechnicalPersonalDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<TechnicalPersonal> getEntitiesByIds(List<Long> ids) {
        return repository.getByIdTechPersonalIn(ids);
    }

    @Override
    public TechnicalPersonalDTO create(TechnicalPersonalEditDTO personalEditDTO) {
        TechnicalPersonal personal = new TechnicalPersonal()
                .setPersonalType(personalEditDTO.getPersonalType())
                .setDateCreated(LocalDateTime.now());

        personal = repository.save(personal);

        // Set data from edit DTO
        setInputData(personal, personalEditDTO);

        return TechnicalPersonalDTO.makeDTO(repository.save(personal));
    }

    @Override
    public TechnicalPersonalDTO update(TechnicalPersonalEditDTO personalEditDTO) {
        if (Objects.isNull(personalEditDTO.getIdTechPersonal()))
            throw new DataValidationException("ID can not be null!");

        TechnicalPersonal personal = getEntity(personalEditDTO.getIdTechPersonal())
                .setDateModified(LocalDateTime.now());

        // Clare all related data
        clearRelatedData(personal);

        // Set data from edit DTO
        setInputData(personal, personalEditDTO);

        return TechnicalPersonalDTO.makeDTO(repository.save(personal));
    }

    @Override
    public void delete(Long id) {
        TechnicalPersonal technicalPersonal = getEntity(id);

        // Remove current entity from all
        clearRelatedData(technicalPersonal);

        repository.delete(technicalPersonal);
    }

    @Override
    public TechnicalPersonal save(TechnicalPersonal technicalPersonal) {
        return repository.save(technicalPersonal);
    }

    @Override
    public List<TechnicalPersonal> save(List<TechnicalPersonal> technicalPersonalList) {
        return repository.saveAll(technicalPersonalList);
    }

    @Override
    public TechnicalPersonal getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("TechnicalPersonal with id: "
                + id.toString() + " is not existed"));
    }

    private void setInputData(TechnicalPersonal personal, TechnicalPersonalEditDTO personalEditDTO) {
        personal.setPersonalName(personalEditDTO.getPersonalName())
                .setDateModified(LocalDateTime.now())
                .setDefinition(personalEditDTO.getDescription())
                .setPersonalType(personalEditDTO.getPersonalType());
        if (Objects.nonNull(personalEditDTO.getIdTeamOfAreaBoss()))
            personal.setTeamOfAreaBoss(teamOfAreaBossService.getEntity(personalEditDTO.getIdTeamOfAreaBoss()));
    }

    private void clearRelatedData(TechnicalPersonal technicalPersonal) {
        if (Objects.nonNull(technicalPersonal.getTeamOfAreaBoss())) {
            TeamOfAreaBoss teamOfAreaBoss = teamOfAreaBossService.getEntity(technicalPersonal.getTeamOfAreaBoss().getIdTeam());
            teamOfAreaBoss.getTechnicalPersonalList().remove(technicalPersonal);
            technicalPersonal.setTeamOfAreaBoss(null);
        }
    }

}
