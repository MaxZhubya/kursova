package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.model.Area;
import univ.max.kursova.service.area.impls.AreaServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/Area")
public class AreaApiRestController {
    @Autowired
    AreaServiceImpl areaService;

    @RequestMapping("/list")
    List<Area> getAll() {
        return areaService.getAll();
    }
}
