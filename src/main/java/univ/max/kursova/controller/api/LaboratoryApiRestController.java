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
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/laboratory")
public class LaboratoryApiRestController {

    @Autowired
    ILaboratoryService laboratoryService;

    @GetMapping("/list")
    public ResponseEntity<List<LaboratoryDTO>> getAll() {
        List<LaboratoryDTO> laboratoryList = laboratoryService.getAll().stream()
                .map(LaboratoryDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<>(laboratoryList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<LaboratoryDTO> getById(@PathVariable("id") Long id) {
        LaboratoryDTO laboratoryDTO = LaboratoryDTO.makeDTO(laboratoryService.get(id));
        return new ResponseEntity<>(laboratoryDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<LaboratoryDTO> create(@RequestBody @Valid LaboratoryEditDTO laboratoryEditDTO) {
        LaboratoryDTO laboratoryDTO = LaboratoryDTO.makeDTO(laboratoryService.create(laboratoryEditDTO));
        return new ResponseEntity<>(laboratoryDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<LaboratoryDTO> update(@RequestBody @Valid LaboratoryEditDTO laboratoryEditDTO) {
        LaboratoryDTO laboratoryDTO = LaboratoryDTO.makeDTO(laboratoryService.update(laboratoryEditDTO));
        return new ResponseEntity<>(laboratoryDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        laboratoryService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
