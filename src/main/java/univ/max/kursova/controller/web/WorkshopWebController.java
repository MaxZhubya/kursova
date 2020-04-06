package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.service.workshop.impls.WorkshopServiceImpl;

import java.util.List;

@Controller
@RequestMapping("/web/Workshop")
public class WorkshopWebController {

    @Autowired
    WorkshopServiceImpl workshopService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("workshopList", workshopService.getAll());
        return "workshopList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) {
        workshopService.delete(id);
        model.addAttribute("workshopList", workshopService.getAll());
        return "workshopList";
    }
}
