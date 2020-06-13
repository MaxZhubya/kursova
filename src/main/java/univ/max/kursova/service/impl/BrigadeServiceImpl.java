package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.BrigadeDTO;
import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.repository.BrigadeRepository;
import univ.max.kursova.service.IAreaService;
import univ.max.kursova.service.IBrigadeService;
import univ.max.kursova.service.IWorkerService;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class BrigadeServiceImpl implements IBrigadeService {

    @Autowired
    private BrigadeRepository repository;

    @Autowired
    private IAreaService areaService;

    @Autowired
    private IWorkerService workerService;

    @Override
    public BrigadeDTO get(Long id) {
        return BrigadeDTO.makeDTO(getEntity(id));
    }

    @Override
    public List<BrigadeDTO> getAll() {
        return repository.findAll().stream().map(BrigadeDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public BrigadeDTO create(BrigadeEditDTO brigadeEditDTO) {
        Brigade brigade = new Brigade()
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        brigade = repository.save(brigade);

        // Set data from EditDTO
        setInputData(brigade, brigadeEditDTO);

        return BrigadeDTO.makeDTO(repository.save(brigade));
    }

    @Override
    public BrigadeDTO update(BrigadeEditDTO brigadeEditDTO) {
        if (Objects.isNull(brigadeEditDTO.getIdBrigade()))
            throw new DataValidationException("ID can not be null!");

        Brigade brigade = getEntity(brigadeEditDTO.getIdBrigade());

        // Clare all related data
        clearRelatedData(brigade);

        // Set data from edit DTO
        setInputData(brigade, brigadeEditDTO);

        return BrigadeDTO.makeDTO(repository.save(brigade));
    }

    @Override
    public void delete(Long id) {
        Brigade brigade = getEntity(id);

        // Remove current entity from all
        clearRelatedData(brigade);

        repository.delete(brigade);
    }

    @Override
    public Brigade save(Brigade brigade) {
        return repository.save(brigade);
    }

    @Override
    public List<Brigade> save(List<Brigade> brigadeList) {
        return repository.saveAll(brigadeList);
    }

    @Override
    public Brigade getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Brigade with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Brigade> getEntitiesByIds(List<Long> ids) {
        return repository.getByIdBrigadeIn(ids);
    }

    private void setInputData(Brigade brigade, BrigadeEditDTO brigadeEditDTO) {
        if (Objects.nonNull(brigadeEditDTO.getIdArea())) {
            Area area = areaService.getEntity(brigadeEditDTO.getIdArea());
            area.getBrigadeList().add(brigade);
            brigade.setArea(area);
        }

        List<Worker> workerList = workerService.getEntitiesByIds(brigadeEditDTO.getWorkerIdList());
        if (workerList.size() != brigadeEditDTO.getWorkerIdList().size())
            throw new DataValidationException("The Worker ids are wrong!");
        workerList.forEach(value -> value.setBrigade(brigade));
        brigade.getWorkerList().addAll(workerList);
    }

    private void clearRelatedData(Brigade brigade) {
        if (Objects.nonNull(brigade.getArea())) {
            brigade.getArea().getBrigadeList().remove(brigade);
            brigade.setArea(null);
        }

        brigade.getWorkerList().forEach(value -> value.setBrigade(null));
        brigade.getWorkerList().clear();
    }
}
