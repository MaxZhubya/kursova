package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.service.laboratory.impls.LaboratoryServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/Laboratory")
public class LaboratoryApiRestController {
    @Autowired
    LaboratoryServiceImpl laboratoryService;

    @RequestMapping("/list")
    List<Laboratory> getAll() {
        return laboratoryService.getAll();
    }
}
