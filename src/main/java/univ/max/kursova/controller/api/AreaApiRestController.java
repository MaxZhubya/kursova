package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.AreaDTO;
import univ.max.kursova.model.Area;
import univ.max.kursova.service.area.impls.AreaServiceImpl;

import javax.xml.ws.Response;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/Area")
public class AreaApiRestController {

    @Autowired
    AreaServiceImpl areaService;

    @GetMapping("/list")
    public ResponseEntity<List<AreaDTO>> getAll() {
        List<AreaDTO> areaList = areaService.getAll().stream()
                .map(AreaDTO::makeDTO).collect(Collectors.toList());
        if (areaList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<AreaDTO>>(areaList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<AreaDTO> getById(@PathVariable("id") Long id) {
        try {
            AreaDTO areaDTO = AreaDTO.makeDTO(areaService.get(id));
            return new ResponseEntity<>(areaDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody AreaDTO areaDTO) {
        try {
            areaService.create(Area.makeEntity(areaDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new Area", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        try {
            areaService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
