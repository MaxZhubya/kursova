package univ.max.kursova.service.laboratory.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.repository.LaboratoryRepository;
import univ.max.kursova.service.laboratory.interfaces.ILaboratoryService;

import java.util.List;

@Service
public class LaboratoryServiceImpl implements ILaboratoryService {

    @Autowired
    private LaboratoryRepository repository;

    @Override
    public Laboratory save(Laboratory laboratory) {
        return repository.save(laboratory);
    }

    @Override
    public Laboratory get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("TechPersonal with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public Laboratory edit(Laboratory laboratory) {
        return repository.save(laboratory);
    }

    @Override
    public Laboratory delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Laboratory> getAll() {
        return repository.findAll();
    }
}
