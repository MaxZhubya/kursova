package univ.max.kursova.service.brigade.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.brigade.impls.BrigadeDaoImpl;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.service.brigade.interfaces.IBrigadeService;

import java.util.List;

@Service
public class BrigadeServiceImpl implements IBrigadeService {
    @Autowired
    BrigadeDaoImpl brigadeDao;

    @Override
    public Brigade save(Brigade worker) {
        return null;
    }

    @Override
    public Brigade get(long id) {
        return null;
    }

    @Override
    public Brigade edit(Brigade brigade) {
        return null;
    }

    @Override
    public Brigade delete(long id) {
        return null;
    }

    @Override
    public List<Brigade> getAll() {
        return brigadeDao.getAll();
    }
}
