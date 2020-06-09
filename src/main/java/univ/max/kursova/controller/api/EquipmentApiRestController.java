package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.EquipmentDTO;
import univ.max.kursova.dto.EquipmentEditDTO;
import univ.max.kursova.service.IEquipmentService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/equipment")
public class EquipmentApiRestController {

    @Autowired
    IEquipmentService equipmentService;

    @GetMapping("/list")
    public ResponseEntity<List<EquipmentDTO>> getAll() {
        List<EquipmentDTO> equipmentList = equipmentService.getAll().stream()
                .map(EquipmentDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<>(equipmentList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<EquipmentDTO> getById(@PathVariable("id") Long id) {
        EquipmentDTO equipmentDTO = EquipmentDTO.makeDTO(equipmentService.get(id));
        return new ResponseEntity<>(equipmentDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<EquipmentDTO> create(@RequestBody @Valid EquipmentEditDTO equipmentEditDTO) {
        EquipmentDTO equipmentDTO = EquipmentDTO
                .makeDTO(equipmentService.create(equipmentEditDTO));
        return new ResponseEntity<>(equipmentDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<EquipmentDTO> update(@RequestBody @Valid EquipmentEditDTO equipmentEditDTO) {
        EquipmentDTO equipmentDTO = EquipmentDTO
                .makeDTO(equipmentService.update(equipmentEditDTO));
        return new ResponseEntity<>(equipmentDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        equipmentService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
