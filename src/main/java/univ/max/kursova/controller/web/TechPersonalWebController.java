package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.model.enums.TechPersonalType;
import univ.max.kursova.service.impl.TechPersonalServiceImpl;

import java.time.LocalDateTime;

@Controller
@RequestMapping("/web/TechnicalPersonal")
public class TechPersonalWebController {

    @Autowired
    TechPersonalServiceImpl techPersonalService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("technicalPersonalList", techPersonalService.getAll());
        return "techPersonalList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) throws Exception {
        techPersonalService.delete(id);
        model.addAttribute("technicalPersonalList", techPersonalService.getAll());
        return "techPersonalList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, TeamOfAreaBoss teamOfAreaBoss, String personalName,
                TechPersonalType techPersonalType, String description) throws Exception {
        // techPersonalService.edit(id, teamOfAreaBoss, personalName, techPersonalType, description);
        model.addAttribute("technicalPersonalList", techPersonalService.getAll());
        return "techPersonalList";
    }

    @RequestMapping("/save/{id}")
    String save(Model model, @PathVariable("id") Long id, TeamOfAreaBoss teamOfAreaBoss, String personalName,
                TechPersonalType techPersonalType, String description, LocalDateTime dateCreated, LocalDateTime dateModified) {
        // techPersonalService.save(id, teamOfAreaBoss, personalName, techPersonalType, description, dateCreated, dateModified);
        model.addAttribute("technicalPersonalList", techPersonalService.getAll());
        return "techPersonalList";
    }
}
