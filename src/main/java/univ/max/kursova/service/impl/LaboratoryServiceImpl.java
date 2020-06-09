package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.LaboratoryEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.repository.LaboratoryRepository;
import univ.max.kursova.service.ILaboratoryService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class LaboratoryServiceImpl implements ILaboratoryService {

    @Autowired
    private LaboratoryRepository repository;

    @Override
    public Laboratory get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Laboratory with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Laboratory> getAll() {
        return repository.findAll();
    }

    @Override
    public Laboratory create(LaboratoryEditDTO laboratoryEditDTO) {
        return null;
    }

    @Override
    public Laboratory update(LaboratoryEditDTO laboratoryEditDTO) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("Laboratory with id: "
                + id.toString() + " is not existed"));
        repository.deleteById(id);
    }

    @Override
    public Laboratory save(Laboratory laboratory) {
        return repository.save(laboratory);
    }

    @Override
    public List<Laboratory> save(List<Laboratory> laboratoryList) {
        return repository.saveAll(laboratoryList);
    }

}
