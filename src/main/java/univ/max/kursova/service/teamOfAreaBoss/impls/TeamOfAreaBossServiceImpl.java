package univ.max.kursova.service.teamOfAreaBoss.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.dao.teamOfAreaBoss.impls.TeamOfAreaBossDaoImpl;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.service.teamOfAreaBoss.interfaces.ITeamOfAreaBossService;

import java.util.List;

@Service
public class TeamOfAreaBossServiceImpl implements ITeamOfAreaBossService {
    @Autowired
    TeamOfAreaBossDaoImpl teamOfAreaBossDao;

    @Override
    public TeamOfAreaBoss save(TeamOfAreaBoss teamOfAreaBoss) {
        return null;
    }

    @Override
    public TeamOfAreaBoss get(long id) {
        return null;
    }

    @Override
    public TeamOfAreaBoss edit(TeamOfAreaBoss teamOfAreaBoss) {
        return null;
    }

    @Override
    public TeamOfAreaBoss delete(long id) {
        return null;
    }

    @Override
    public List<TeamOfAreaBoss> getAll() {
        return teamOfAreaBossDao.getAll();
    }
}
