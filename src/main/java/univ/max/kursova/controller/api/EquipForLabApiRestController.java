package univ.max.kursova.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.EquipmentForLaboratoryDTO;
import univ.max.kursova.model.EquipmentForLaboratory;
import univ.max.kursova.service.equipForLabService.impls.EquipForLabServiceImpl;
import univ.max.kursova.view.Views;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/EquipmentForLaboratory")
public class EquipForLabApiRestController {

    @Autowired
    EquipForLabServiceImpl equipForLabService;

    //@JsonView(Views.EquipmentForLaboratoryView.class)
    @GetMapping("/list")
    public ResponseEntity<List<EquipmentForLaboratoryDTO>> getAll() {
        List<EquipmentForLaboratoryDTO> equipmentList = equipForLabService.getAll().stream()
                .map(EquipmentForLaboratoryDTO::makeDTO).collect(Collectors.toList());
        if (equipmentList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<EquipmentForLaboratoryDTO>>(equipmentList, HttpStatus.OK);
    }

    //@JsonView(Views.EquipmentForLaboratoryView.class)
    @GetMapping("/list/{id}")
    public ResponseEntity<EquipmentForLaboratoryDTO> getById(@PathVariable("id") Long id) {
        try {
            EquipmentForLaboratoryDTO equipmentDTO = EquipmentForLaboratoryDTO.makeDTO(equipForLabService.get(id));
            return new ResponseEntity<>(equipmentDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //@JsonView(Views.EquipmentForLaboratoryView.class)
    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody EquipmentForLaboratoryDTO equipmentDTO) {
        try {
            equipForLabService.create(EquipmentForLaboratory.makeEntity(equipmentDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new EquipmentForLaboratory", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //@JsonView(Views.EquipmentForLaboratoryView.class)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        try {
            equipForLabService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
