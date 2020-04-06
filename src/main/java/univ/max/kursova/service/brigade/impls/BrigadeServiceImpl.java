package univ.max.kursova.service.brigade.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.repository.BrigadeRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.brigade.interfaces.IBrigadeService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class BrigadeServiceImpl implements IBrigadeService {

    @Autowired
    BrigadeRepository repository;

    @Override
    public Brigade save(Brigade brigade) {
        return repository.save(brigade);
    }

    @Override
    public Brigade get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Brigade edit(Brigade brigade) {
        return repository.save(brigade);
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
