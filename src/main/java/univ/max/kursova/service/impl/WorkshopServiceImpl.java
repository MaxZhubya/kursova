package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.WorkshopDTO;
import univ.max.kursova.dto.WorkshopEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.repository.WorkshopRepository;
import univ.max.kursova.service.IAreaService;
import univ.max.kursova.service.ILaboratoryService;
import univ.max.kursova.service.IWorkshopService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class WorkshopServiceImpl implements IWorkshopService {

    @Autowired
    private WorkshopRepository repository;

    @Autowired
    private IAreaService areaService;

    @Autowired
    private ILaboratoryService laboratoryService;

    @Override
    @Transactional(readOnly = true)
    public WorkshopDTO get(Long id) {
        return WorkshopDTO.makeDTO(getEntity(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<WorkshopDTO> getAll() {
        return repository.findByOrderByIdWorkshopAsc().stream().map(WorkshopDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public WorkshopDTO create(WorkshopEditDTO workshopEditDTO) {
        Workshop workshop = new Workshop()
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        workshop = repository.save(workshop);

        // Set data from edit DTO
        setInputData(workshop, workshopEditDTO);

        return WorkshopDTO.makeDTO(repository.save(workshop));
    }

    @Override
    public WorkshopDTO update(WorkshopEditDTO workshopEditDTO) {
        if (Objects.isNull(workshopEditDTO.getIdWorkshop()))
            throw new DataValidationException("ID can not be null!");

        Workshop workshop = getEntity(workshopEditDTO.getIdWorkshop())
                .setDateModified(LocalDateTime.now());

        // Clare all related data
        clearRelatedData(workshop);

        // Set data from edit DTO
        setInputData(workshop, workshopEditDTO);

        return WorkshopDTO.makeDTO(repository.save(workshop));
    }

    @Override
    public void delete(Long id) {
        Workshop workshop = getEntity(id);

        // Remove current entity from all
        clearRelatedData(workshop);

        repository.delete(workshop);
    }

    @Override
    public Workshop save(Workshop workshop) {
        return repository.save(workshop);
    }

    @Override
    public List<Workshop> save(List<Workshop> workshopList) {
        return repository.saveAll(workshopList);
    }

    @Override
    public Workshop getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Workshop with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Workshop> getEntitiesByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

    private void setInputData(Workshop workshop, WorkshopEditDTO workshopEditDTO) {
        workshop.setDefinition(workshopEditDTO.getDefinition());

        List<Area> areaList = areaService.getEntitiesByIds(workshopEditDTO.getAreaIdList());
        if (areaList.size() != workshopEditDTO.getAreaIdList().size())
            throw new DataValidationException("The Area ids are wrong!");
        areaList.forEach(value -> value.setWorkshop(workshop));
        workshop.getAreaList().addAll(areaList);

        List<Laboratory> laboratoryList = laboratoryService.getEntitiesByIds(workshopEditDTO.getLaboratoryIdList());
        if (laboratoryList.size() != workshopEditDTO.getLaboratoryIdList().size())
            throw new DataValidationException("The Laboratory ids are wrong!");
        laboratoryList.forEach(value -> value.getWorkshopList().add(workshop));
        workshop.getLaboratoryList().addAll(laboratoryList);
    }

    private void clearRelatedData(Workshop workshop) {
        workshop.getAreaList().forEach(value -> value.setWorkshop(null));
        workshop.getAreaList().clear();

        workshop.getLaboratoryList().forEach(value -> value.getWorkshopList().remove(workshop));
        workshop.getLaboratoryList().clear();
    }

}
