package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.service.equipForLabService.impls.EquipForLabServiceImpl;

import java.util.List;

@Controller
@RequestMapping("/web/EquipmentForLaboratory")
public class EquipForLabWebController {
    @Autowired
    EquipForLabServiceImpl equipForLabService;

    @RequestMapping("/list")
    List<EquipmentForLaboratory> getAll() {
        return equipForLabService.getAll();
    }
}
