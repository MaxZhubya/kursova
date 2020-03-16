package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.service.techPersonal.impl.TechPersonalServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/TechnicalPersonal")
public class TechPersonalApiRestController {

    @Autowired
    TechPersonalServiceImpl techPersonalServiceImpl;

    @RequestMapping("/list")
    List<TechnicalPersonal> getAll() {
        return techPersonalServiceImpl.getAll();
    }
}
