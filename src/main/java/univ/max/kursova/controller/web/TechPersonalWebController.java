package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import univ.max.kursova.service.techPersonal.impl.TechPersonalServiceImpl;

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
    String delete(Model model, @PathVariable("id") Long id) {
        techPersonalService.delete(id);
        model.addAttribute("technicalPersonalList", techPersonalService.getAll());
        return "techPersonalList";
    }
}
