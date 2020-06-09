package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.repository.BrigadeRepository;
import univ.max.kursova.service.IBrigadeService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BrigadeServiceImpl implements IBrigadeService {

    @Autowired
    BrigadeRepository repository;

    @Override
    public Brigade get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Brigade with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Brigade> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Brigade> getByIds(List<Long> ids) {
        return repository.getByIdBrigadeIn(ids);
    }

    @Override
    public Brigade create(BrigadeEditDTO brigade) {
        return null;
    }

    @Override
    public Brigade update(BrigadeEditDTO brigade) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.findById(id).orElseThrow(() -> new DataNotFoundException("Brigade with id: "
                + id.toString() + " is not existed"));
        repository.deleteById(id);
    }

    @Override
    public Brigade save(Brigade brigade) {
        return repository.save(brigade);
    }

    @Override
    public List<Brigade> save(List<Brigade> brigadeList) {
        return repository.saveAll(brigadeList);
    }

}
