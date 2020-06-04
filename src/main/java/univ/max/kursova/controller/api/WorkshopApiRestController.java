package univ.max.kursova.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.WorkshopDTO;
import univ.max.kursova.model.Workshop;
import univ.max.kursova.service.workshop.impls.WorkshopServiceImpl;
import univ.max.kursova.view.Views;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/Workshop")
public class WorkshopApiRestController {

    @Autowired
    WorkshopServiceImpl workshopService;

    //@JsonView(Views.WorkshopView.class)
    @GetMapping("/list")
    public ResponseEntity<List<WorkshopDTO>> getAll() {
        List<WorkshopDTO> workshopList = workshopService.getAll().stream()
                .map(WorkshopDTO::makeDTO).collect(Collectors.toList());
        if (workshopList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<WorkshopDTO>>(workshopList, HttpStatus.OK);
    }

    //@JsonView(Views.WorkshopView.class)
    @GetMapping("/list/{id}")
    public ResponseEntity<WorkshopDTO> getById(@PathVariable("id") Long id) {
        try {
            WorkshopDTO workshopDTO = WorkshopDTO.makeDTO(workshopService.get(id));
            return new ResponseEntity<>(workshopDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //@JsonView(Views.WorkshopView.class)
    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody WorkshopDTO workshopDTO) {
        try {
            workshopService.create(Workshop.makeEntity(workshopDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new Workshop", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //@JsonView(Views.WorkshopView.class)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        try {
            workshopService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
