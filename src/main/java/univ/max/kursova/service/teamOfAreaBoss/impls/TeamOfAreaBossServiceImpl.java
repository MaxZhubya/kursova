package univ.max.kursova.service.teamOfAreaBoss.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.repository.TeamOfAreaBossRepository;
import univ.max.kursova.service.DataServiceImpl;
import univ.max.kursova.service.teamOfAreaBoss.interfaces.ITeamOfAreaBossService;

import java.util.List;

@Service
public class TeamOfAreaBossServiceImpl implements ITeamOfAreaBossService {

    @Autowired
    private TeamOfAreaBossRepository repository;

    @Override
    public TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss) {
        return repository.save(teamOfAreaBoss);
    }

    @Override
    public TeamOfAreaBoss get(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Worker with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public TeamOfAreaBoss edit(TeamOfAreaBoss teamOfAreaBoss) {
        return repository.save(teamOfAreaBoss);
    }

    @Override
    public TeamOfAreaBoss delete(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<TeamOfAreaBoss> getAll() {
        return repository.findAll();
    }
}
