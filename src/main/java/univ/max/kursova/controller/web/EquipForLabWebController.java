package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.enums.EquipmentType;
import univ.max.kursova.service.equipForLabService.impls.EquipForLabServiceImpl;

import java.util.List;

@Controller
@RequestMapping("/web/EquipmentForLaboratory")
public class EquipForLabWebController {

    @Autowired
    EquipForLabServiceImpl equipForLabService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("equipmentForLabList", equipForLabService.getAll());
        return "equipmentForLabList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) {
        equipForLabService.delete(id);
        model.addAttribute("equipmentForLabList", equipForLabService.getAll());
        return "equipmentForLabList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, Laboratory laboratory, EquipmentType equipmentType, String definition) throws Exception {
        equipForLabService.edit(id, laboratory, equipmentType, definition);
        model.addAttribute("equipmentForLabList", equipForLabService.getAll());
        return "equipmentForLabList";
    }

    @RequestMapping("/save/{id}")
    String save(Model model, @PathVariable("id") Long id, Laboratory laboratory, EquipmentType equipmentType, String definition) {
        equipForLabService.save(id, laboratory, equipmentType, definition);
        model.addAttribute("equipmentForLabList", equipForLabService.getAll());
        return "equipmentForLabList";
    }
}
