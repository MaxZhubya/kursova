package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.service.teamOfAreaBoss.impls.TeamOfAreaBossServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/TeamOfAreaBoss")
public class TeamOfAreaBossApiRestController {
    @Autowired
    TeamOfAreaBossServiceImpl teamOfAreaBossService;

    @RequestMapping("/list")
    List<TeamOfAreaBoss> getAll() {
        return teamOfAreaBossService.getAll();
    }
}
