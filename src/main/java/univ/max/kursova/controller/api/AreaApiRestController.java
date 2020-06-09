package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.AreaDTO;
import univ.max.kursova.dto.AreaEditDTO;
import univ.max.kursova.service.IAreaService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/area")
public class AreaApiRestController {

    @Autowired
    IAreaService areaService;

    @GetMapping("/list")
    public ResponseEntity<List<AreaDTO>> getAll() {
        List<AreaDTO> areaList = areaService.getAll().stream()
                .map(AreaDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<List<AreaDTO>>(areaList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<AreaDTO> getById(@PathVariable("id") Long id) {
        AreaDTO areaDTO = AreaDTO.makeDTO(areaService.get(id));
        return new ResponseEntity<>(areaDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<AreaDTO> create(@RequestBody @Valid AreaEditDTO areaEditDTO) {
        AreaDTO areaDTO = AreaDTO.makeDTO(areaService.create(areaEditDTO));
        return new ResponseEntity<>(areaDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<AreaDTO> update(@RequestBody @Valid AreaEditDTO areaEditDTO) {
        AreaDTO areaDTO = AreaDTO.makeDTO(areaService.update(areaEditDTO));
        return new ResponseEntity<>(areaDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
       areaService.delete(id);
       return new ResponseEntity<>(HttpStatus.OK);
    }
}
