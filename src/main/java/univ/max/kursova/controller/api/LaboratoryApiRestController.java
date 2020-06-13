package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.LaboratoryDTO;
import univ.max.kursova.dto.LaboratoryEditDTO;
import univ.max.kursova.service.ILaboratoryService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/laboratory")
public class LaboratoryApiRestController {

    @Autowired
    ILaboratoryService laboratoryService;

    @GetMapping("/list")
    public ResponseEntity<List<LaboratoryDTO>> getAll() {
        return new ResponseEntity<>(laboratoryService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<LaboratoryDTO> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(laboratoryService.get(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<LaboratoryDTO> create(@RequestBody @Valid LaboratoryEditDTO laboratoryEditDTO) {
        return new ResponseEntity<>(laboratoryService.create(laboratoryEditDTO), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<LaboratoryDTO> update(@RequestBody @Valid LaboratoryEditDTO laboratoryEditDTO) {
        return new ResponseEntity<>(laboratoryService.update(laboratoryEditDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        laboratoryService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
