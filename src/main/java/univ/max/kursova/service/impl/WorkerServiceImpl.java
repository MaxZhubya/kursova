package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.WorkerDTO;
import univ.max.kursova.dto.WorkerEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.repository.WorkerRepository;
import univ.max.kursova.service.IBrigadeService;
import univ.max.kursova.service.IWorkerService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class WorkerServiceImpl implements IWorkerService {

    @Autowired
    private WorkerRepository repository;

    @Autowired
    private IBrigadeService brigadeService;

    @Override
    @Transactional(readOnly = true)
    public WorkerDTO get(Long id) {
        return WorkerDTO.makeDTO(getEntity(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<WorkerDTO> getAll() {
        return repository.findAll().stream().map(WorkerDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public WorkerDTO create(WorkerEditDTO workerEditDTO) {
        Worker worker = new Worker()
                .setWorkerName(workerEditDTO.getWorkerName())
                .setWorkerType(workerEditDTO.getWorkerType())
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        worker = repository.save(worker);

        // Set data from edit DTO
        setInputData(worker, workerEditDTO);

        return WorkerDTO.makeDTO(repository.save(worker));
    }

    @Override
    public WorkerDTO update(WorkerEditDTO workerEditDTO) {
        if (Objects.isNull(workerEditDTO.getIdWorker()))
            throw new DataValidationException("ID can not be null!");

        Worker worker = getEntity(workerEditDTO.getIdWorker())
                .setDateModified(LocalDateTime.now());

        // Clare all related data
        clearRelatedData(worker);

        // Set data from edit DTO
        setInputData(worker, workerEditDTO);

        return WorkerDTO.makeDTO(repository.save(worker));
    }

    @Override
    public void delete(Long id) {
        Worker worker = getEntity(id);

        // Remove current entity from all
        clearRelatedData(worker);

        repository.delete(worker);
    }

    @Override
    public Worker save(Worker worker) {
        return repository.save(worker);
    }

    @Override
    public List<Worker> save(List<Worker> workerList) {
        return repository.saveAll(workerList);
    }

    @Override
    public List<Worker> getEntitiesByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

    @Override
    public Worker getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Worker with id: "
                + id.toString() + " is not existed"));
    }

    private void setInputData(Worker worker, WorkerEditDTO workerEditDTO) {
        worker.setWorkerName(workerEditDTO.getWorkerName())
                .setWorkerType(workerEditDTO.getWorkerType());

        if (Objects.nonNull(workerEditDTO.getIdBrigade())) {
            Brigade brigade = brigadeService.getEntity(workerEditDTO.getIdBrigade());
            brigade.getWorkerList().add(worker);
            worker.setBrigade(brigade);
        }
    }

    private void clearRelatedData(Worker worker) {
        if (Objects.nonNull(worker.getBrigade())) {
            worker.getBrigade().getWorkerList().remove(worker);
            worker.setBrigade(null);
        }
    }

}
