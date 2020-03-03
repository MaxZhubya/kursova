package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.service.teamOfAreaBoss.impls.TeamOfAreaBossServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/web/TeamOfAreaBoss")
public class TeamOfAreaBossWebRestController {
    @Autowired
    TeamOfAreaBossServiceImpl teamOfAreaBossService;

    @RequestMapping("/list")
    List<TeamOfAreaBoss> getAll() {
        return teamOfAreaBossService.getAll();
    }
}
