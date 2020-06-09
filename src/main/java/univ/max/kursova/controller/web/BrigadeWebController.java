package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.Worker;
import univ.max.kursova.service.impl.BrigadeServiceImpl;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/web/Brigade")
public class BrigadeWebController {

    @Autowired
    BrigadeServiceImpl brigadeService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("brigadeList", brigadeService.getAll());
        return "brigadeList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) throws Exception {
        brigadeService.delete(id);
        model.addAttribute("brigadeList", brigadeService.getAll());
        return "brigadeList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, List<Worker> workerList, Area area) throws Exception {
        // brigadeService.edit( id, workerList, area);
        model.addAttribute("brigadeList", brigadeService.getAll());
        return "brigadeList";
    }

    @RequestMapping("/save/{id}")
    String save(Model model, @PathVariable("id") Long id, List<Worker> workerList, Area area, LocalDateTime dateCreated, LocalDateTime dateModified) {
        // brigadeService.save( id, workerList, area, dateCreated, dateModified);
        model.addAttribute("brigadeList", brigadeService.getAll());
        return "brigadeList";
    }
}
