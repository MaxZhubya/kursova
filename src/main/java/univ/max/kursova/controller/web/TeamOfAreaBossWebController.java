package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.service.teamOfAreaBoss.impls.TeamOfAreaBossServiceImpl;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/web/TeamOfAreaBoss")
public class TeamOfAreaBossWebController {
    @Autowired
    TeamOfAreaBossServiceImpl teamOfAreaBossService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("teamOfAreaBossList", teamOfAreaBossService.getAll());
        return "teamOfAreaBossList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) throws Exception {
        teamOfAreaBossService.delete(id);
        model.addAttribute("teamOfAreaBossList", teamOfAreaBossService.getAll());
        return "teamOfAreaBossList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, List<TechnicalPersonal> technicalPersonalList, Area area) throws Exception {
        // teamOfAreaBossService.edit(id, technicalPersonalList, area);
        model.addAttribute("teamOfAreaBossList", teamOfAreaBossService.getAll());
        return "teamOfAreaBossList";
    }

    @RequestMapping("/save/{id}")
    String save(Model model, @PathVariable("id") Long id, List<TechnicalPersonal> technicalPersonalList, Area area,
                LocalDateTime dateCreated, LocalDateTime dateModified) {
        // teamOfAreaBossService.save(id, technicalPersonalList, area, dateCreated, dateModified);
        model.addAttribute("teamOfAreaBossList", teamOfAreaBossService.getAll());
        return "teamOfAreaBossList";
    }
}
