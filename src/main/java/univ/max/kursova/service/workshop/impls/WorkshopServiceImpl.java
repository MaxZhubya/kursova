package univ.max.kursova.service.workshop.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.repository.WorkshopRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.workshop.interfaces.IWorkshopService;

import java.util.List;

@Service
public class WorkshopServiceImpl implements IWorkshopService {

    @Autowired
    private WorkshopRepository repository;

    @Override
    public Workshop save(Workshop workshop) {
        return repository.save(workshop);
    }

    @Override
    public Workshop get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechPersonal with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Workshop edit(Workshop workshop) {
        return repository.save(workshop);
    }

    @Override
    public Workshop delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Workshop> getAll() {
        return repository.findAll();
    }
}
