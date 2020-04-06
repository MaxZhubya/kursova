package univ.max.kursova.service.area.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Area;
import univ.max.kursova.repository.AreaRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.area.interfaces.IAreaService;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class AreaServiceImpl implements IAreaService {

    @Autowired
    private AreaRepository repository;

    @Override
    public Area save(Area area) {
        return repository.save(area);
    }

    @Override
    public Area get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Area edit(Area area) {
        return repository.save(area);
    }

    @Override
    public Area delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Area> getAll() {
        return repository.findAll();
    }
}
