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
        List<TechnicalPersonalDTO> technicalList = techPersonalService.getAll().stream()
                .map(TechnicalPersonalDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<>(technicalList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<TechnicalPersonalDTO> getById(@PathVariable("id") Long id) {
        TechnicalPersonalDTO technicalDTO = TechnicalPersonalDTO.makeDTO(techPersonalService.get(id));
        return new ResponseEntity<>(technicalDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TechnicalPersonalDTO> create(@RequestBody @Valid TechnicalPersonalEditDTO technicalPersonalEditDTO) {
        TechnicalPersonalDTO technicalDTO = TechnicalPersonalDTO.makeDTO(techPersonalService.create(technicalPersonalEditDTO));
        return new ResponseEntity<>(technicalDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<TechnicalPersonalDTO> update(@RequestBody @Valid TechnicalPersonalEditDTO technicalPersonalEditDTO) {
        TechnicalPersonalDTO technicalDTO = TechnicalPersonalDTO.makeDTO(techPersonalService.update(technicalPersonalEditDTO));
        return new ResponseEntity<>(technicalDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        techPersonalService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
