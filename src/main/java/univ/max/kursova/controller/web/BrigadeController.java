package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.service.brigade.impls.BrigadeServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/web/Brigade")
public class BrigadeController {
    @Autowired
    BrigadeServiceImpl brigadeService;

    @RequestMapping("/list")
    List<Brigade> getAll() {
        return brigadeService.getAll();
    }
}
