package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.PersonalType;
import univ.max.kursova.service.techPersonal.impls.TechPersonalServiceImpl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/web/TechnicalPersonal")
public class TechPersonalController {

    @Autowired
    TechPersonalServiceImpl techPersonalService;

    @RequestMapping("/list")
    List<TechnicalPersonal> getAll() {
        return techPersonalService.getAll();
    }
}
