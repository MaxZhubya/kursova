package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Worker;
import univ.max.kursova.service.worker.impls.WorkerServiceImpl;

import java.util.List;

@Controller
@RequestMapping("/web/Worker")
public class WorkerWebController {

    @Autowired
    WorkerServiceImpl workerService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("workerList", workerService.getAll());
        return "workerList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) {
        workerService.delete(id);
        model.addAttribute("workerList", workerService.getAll());
        return "workerList";
    }
}
