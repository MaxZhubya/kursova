package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.AreaDTO;
import univ.max.kursova.dto.AreaEditDTO;
import univ.max.kursova.service.IAreaService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/area")
public class AreaApiRestController {

    @Autowired
    IAreaService areaService;

    @GetMapping("/list")
    public ResponseEntity<List<AreaDTO>> getAll() {
        return new ResponseEntity<>(areaService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<AreaDTO> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(areaService.get(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<AreaDTO> create(@RequestBody @Valid AreaEditDTO areaEditDTO) {
        return new ResponseEntity<>(areaService.create(areaEditDTO), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<AreaDTO> update(@RequestBody @Valid AreaEditDTO areaEditDTO) {
        return new ResponseEntity<>(areaService.update(areaEditDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
       areaService.delete(id);
       return new ResponseEntity<>(HttpStatus.OK);
    }
}
