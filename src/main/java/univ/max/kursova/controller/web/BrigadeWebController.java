package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.service.brigade.impls.BrigadeServiceImpl;

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
    String delete(Model model, @PathVariable("id") Long id) {
        brigadeService.delete(id);
        model.addAttribute("brigadeList", brigadeService.getAll());
        return "brigadeList";
    }
}
