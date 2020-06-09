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
        List<WorkshopDTO> workshopList = workshopService.getAll().stream()
                .map(WorkshopDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<>(workshopList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<WorkshopDTO> getById(@PathVariable("id") Long id) {
        WorkshopDTO workshopDTO = WorkshopDTO.makeDTO(workshopService.get(id));
        return new ResponseEntity<>(workshopDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<WorkshopDTO> create(@RequestBody @Valid WorkshopEditDTO workshopEditDTO) {
        WorkshopDTO workshopDTO = WorkshopDTO.makeDTO(workshopService.create(workshopEditDTO));
        return new ResponseEntity<>(workshopDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<WorkshopDTO> update(@RequestBody @Valid WorkshopEditDTO workshopEditDTO) {
        WorkshopDTO workshopDTO = WorkshopDTO.makeDTO(workshopService.update(workshopEditDTO));
        return new ResponseEntity<>(workshopDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        workshopService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
