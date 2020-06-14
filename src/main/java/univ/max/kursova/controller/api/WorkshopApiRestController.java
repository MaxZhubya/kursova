package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.WorkshopDTO;
import univ.max.kursova.dto.WorkshopEditDTO;
import univ.max.kursova.service.IWorkshopService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/workshop")
public class WorkshopApiRestController {

    @Autowired
    IWorkshopService workshopService;

    @GetMapping("/list")
    public ResponseEntity<List<WorkshopDTO>> getAll() {
        return new ResponseEntity<>(workshopService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<WorkshopDTO> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(workshopService.get(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<WorkshopDTO> create(@RequestBody @Valid WorkshopEditDTO workshopEditDTO) {
        return new ResponseEntity<>(workshopService.create(workshopEditDTO), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<WorkshopDTO> update(@RequestBody @Valid WorkshopEditDTO workshopEditDTO) {
        return new ResponseEntity<>(workshopService.update(workshopEditDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        workshopService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
