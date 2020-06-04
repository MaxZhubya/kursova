package univ.max.kursova.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.LaboratoryDTO;
import univ.max.kursova.model.Laboratory;
import univ.max.kursova.service.laboratory.impls.LaboratoryServiceImpl;
import univ.max.kursova.view.Views;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/Laboratory")
public class LaboratoryApiRestController {

    @Autowired
    LaboratoryServiceImpl laboratoryService;

//    @JsonView(Views.LaboratoryView.class)
    @GetMapping("/list")
    public ResponseEntity<List<LaboratoryDTO>> getAll() {
        List<LaboratoryDTO> laboratoryList = laboratoryService.getAll().stream()
                .map(LaboratoryDTO::makeDTO).collect(Collectors.toList());
        if (laboratoryList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<LaboratoryDTO>>(laboratoryList, HttpStatus.OK);
    }

//    @JsonView(Views.LaboratoryView.class)
    @GetMapping("/list/{id}")
    public ResponseEntity<LaboratoryDTO> getById(@PathVariable("id") Long id) {
        try {
            LaboratoryDTO laboratoryDTO = LaboratoryDTO.makeDTO(laboratoryService.get(id));
            return new ResponseEntity<>(laboratoryDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //@JsonView(Views.LaboratoryView.class)
    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody LaboratoryDTO laboratoryDTO) {
        try {
            laboratoryService.create(Laboratory.makeEntity(laboratoryDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new Laboratory", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //@JsonView(Views.LaboratoryView.class)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        try {
            laboratoryService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
