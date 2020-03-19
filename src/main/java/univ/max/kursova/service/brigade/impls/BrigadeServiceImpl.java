package univ.max.kursova.service.brigade.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.brigade.impls.BrigadeDaoImpl;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.repository.BrigadeRepository;
import univ.max.kursova.service.brigade.interfaces.IBrigadeService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class BrigadeServiceImpl implements IBrigadeService {

    @Autowired
    BrigadeRepository repository;

    @Autowired
    BrigadeDaoImpl brigadeDao;

    @PostConstruct
    void init() {
        List<Brigade> list = brigadeDao.getAll();
        repository.saveAll(list);
    }

    @Override
    public Brigade save(Brigade worker) {
        return null;
    }

    @Override
    public Brigade get(Long id) {
        return brigadeDao.getAll().stream().filter(item -> item.getIdBrigade().equals(id)).findFirst()
                .orElse(null);
    }

    @Override
    public Brigade edit(Brigade brigade) {
        return null;
    }

    @Override
    public Brigade delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Brigade> getAll() {
        return repository.findAll();
    }
}
