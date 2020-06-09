package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.BrigadeDTO;
import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.service.IBrigadeService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/brigade")
public class BrigadeApiRestController {

    @Autowired
    IBrigadeService brigadeService;

    @GetMapping("/list")
    public ResponseEntity<List<BrigadeDTO>> getAll() {
        List<BrigadeDTO> brigadeList = brigadeService.getAll().stream()
                .map(BrigadeDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<>(brigadeList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<BrigadeDTO> getById(@PathVariable("id") Long id) {
        BrigadeDTO brigadeDTO = BrigadeDTO.makeDTO(brigadeService.get(id));
        return new ResponseEntity<>(brigadeDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BrigadeDTO> create(@RequestBody @Valid BrigadeEditDTO brigadeEditDTO) {
        BrigadeDTO brigadeDTO = BrigadeDTO.makeDTO(brigadeService.create(brigadeEditDTO));
        return new ResponseEntity<>(brigadeDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<BrigadeDTO> update(@RequestBody @Valid BrigadeEditDTO brigadeEditDTO) {
        BrigadeDTO brigadeDTO = BrigadeDTO.makeDTO(brigadeService.update(brigadeEditDTO));
        return new ResponseEntity<>(brigadeDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        brigadeService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
