package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.model.Product;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.service.laboratory.impls.LaboratoryServiceImpl;

import java.util.List;

@Controller
@RequestMapping("/web/Laboratory")
public class LaboratoryWebController {

    @Autowired
    LaboratoryServiceImpl laboratoryService;

    @RequestMapping("/list")
    String getAll(Model model) {
        model.addAttribute("laboratoryList", laboratoryService.getAll());
        return "laboratoryList";
    }

    @RequestMapping("/delete/{id}")
    String delete(Model model, @PathVariable("id") Long id) {
        laboratoryService.delete(id);
        model.addAttribute("laboratoryList", laboratoryService.getAll());
        return "laboratoryList";
    }

    @RequestMapping("/edit/{id}")
    String edit(Model model, @PathVariable("id") Long id, List<EquipmentForLaboratory> equipmentForLabList,
                List<Product> productList, List<Workshop> workshopList, String definition) throws Exception {
        laboratoryService.edit(id, equipmentForLabList, productList, workshopList, definition);
        model.addAttribute("laboratoryList", laboratoryService.getAll());
        return "laboratoryList";
    }

    @RequestMapping("/save/{id}")
    String save(Model model, @PathVariable("id") Long id, List<EquipmentForLaboratory> equipmentForLabList,
                List<Product> productList, List<Workshop> workshopList, String definition) {
        laboratoryService.save(id, equipmentForLabList, productList, workshopList, definition);
        model.addAttribute("laboratoryList", laboratoryService.getAll());
        return "laboratoryList";
    }
}
