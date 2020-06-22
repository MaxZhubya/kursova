package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.dto.TechnicalPersonalEditDTO;
import univ.max.kursova.service.ITechPersonalService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/technicalPersonal")
public class TechPersonalApiRestController {

    @Autowired
    ITechPersonalService techPersonalService;

    @GetMapping("/list")
    public ResponseEntity<List<TechnicalPersonalDTO>> getAll() {
        return new ResponseEntity<>(techPersonalService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<TechnicalPersonalDTO> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(techPersonalService.get(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TechnicalPersonalDTO> create(@RequestBody @Valid TechnicalPersonalEditDTO technicalPersonalEditDTO) {
        return new ResponseEntity<>(techPersonalService.create(technicalPersonalEditDTO), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<TechnicalPersonalDTO> update(@RequestBody @Valid TechnicalPersonalEditDTO technicalPersonalEditDTO) {
        return new ResponseEntity<>(techPersonalService.update(technicalPersonalEditDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        techPersonalService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
