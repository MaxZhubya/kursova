package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.service.laboratory.impls.LaboratoryServiceImpl;

import java.util.List;

@Controller
@RequestMapping("/web/Laboratory")
public class LaboratoryWebController {
    @Autowired
    LaboratoryServiceImpl laboratoryService;

    @RequestMapping("/list")
    List<Laboratory> getAll() {
        return laboratoryService.getAll();
    }
}
