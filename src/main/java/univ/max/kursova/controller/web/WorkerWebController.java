package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.enums.WorkerType;
import univ.max.kursova.service.worker.impls.WorkerServiceImpl;

import java.time.LocalDateTime;
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
    String delete(Model model, @PathVariable("id") Long id) throws Exception {
        workerService.delete(id);
        model.addAttribute("workerList", workerService.getAll());
        return "workerList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, Brigade brigade, String workerName, WorkerType workerType) throws Exception {
        workerService.edit(id, brigade, workerName, workerType);
        model.addAttribute("workerList", workerService.getAll());
        return "workerList";
    }

    @RequestMapping("/save/{id}")
    String save(Model model, @PathVariable("id") Long id, Brigade brigade, String workerName, WorkerType workerType,
                LocalDateTime dateCreated, LocalDateTime dateModified) throws Exception {
        workerService.save(id, brigade, workerName, workerType, dateCreated, dateModified);
        model.addAttribute("workerList", workerService.getAll());
        return "workerList";
    }
}
