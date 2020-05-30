package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.*;
import univ.max.kursova.service.area.impls.AreaServiceImpl;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/web/Area")
public class AreaWebController {

    @Autowired
    AreaServiceImpl areaService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("areaList", areaService.getAll());
        return "areaList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) throws Exception {
        areaService.delete(id);
        model.addAttribute("areaList", areaService.getAll());
        return "areaList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, List<Product> productList,
                Workshop workshop, String definition) throws Exception {
        areaService.edit(id, teamOfAreaBoss, brigadeList, productList, workshop, definition);
        model.addAttribute("areaList", areaService.getAll());
        return "areaList";
    }

    @RequestMapping("/create/{id}")
    String save(Model model, @PathVariable("id") Long id, TeamOfAreaBoss teamOfAreaBoss, List<Brigade> brigadeList, List<Product> productList,
                Workshop workshop, String definition, LocalDateTime dateCreated, LocalDateTime dateModified) {
        areaService.save(id, teamOfAreaBoss, brigadeList, productList, workshop, definition, dateCreated, dateModified);
        model.addAttribute("areaList", areaService.getAll());
        return "areaList";
    }
}
