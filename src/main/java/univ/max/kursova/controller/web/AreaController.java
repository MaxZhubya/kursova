package univ.max.kursova.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Area;
import univ.max.kursova.service.area.impls.AreaServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/web/Area")
public class AreaController {
    @Autowired
    AreaServiceImpl areaService;

    @RequestMapping("/list")
    List<Area> getAll() {
        return areaService.getAll();
    }
}
