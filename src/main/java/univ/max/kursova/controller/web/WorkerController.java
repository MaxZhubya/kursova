package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Worker;
import univ.max.kursova.service.worker.impls.WorkerServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/web/Worker")
public class WorkerController {
    @Autowired
    WorkerServiceImpl workerService;

    @RequestMapping("/list")
    List<Worker> getAll() {
        return workerService.getAll();
    }
}
