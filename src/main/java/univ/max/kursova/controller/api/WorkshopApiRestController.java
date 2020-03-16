package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.service.workshop.impls.WorkshopServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/Workshop")
public class WorkshopApiRestController {
    @Autowired
    WorkshopServiceImpl workshopService;

    @RequestMapping("/list")
    List<Workshop> getAll() {
        return workshopService.getAll();
    }
}
