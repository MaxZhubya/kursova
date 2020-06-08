package univ.max.kursova.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.BrigadeDTO;
import univ.max.kursova.dto.BrigadeEditDTO;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.service.brigade.impls.BrigadeServiceImpl;
import univ.max.kursova.view.Views;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/Brigade")
public class BrigadeApiRestController {

    @Autowired
    BrigadeServiceImpl brigadeService;

    @GetMapping("/list")
    public ResponseEntity<List<BrigadeDTO>> getAll() {
        List<BrigadeDTO> brigadeList = brigadeService.getAll().stream()
                .map(BrigadeDTO::makeDTO).collect(Collectors.toList());
        if (brigadeList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<BrigadeDTO>>(brigadeList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<BrigadeDTO> getById(@PathVariable("id") Long id) {
        try {
            BrigadeDTO brigadeDTO = BrigadeDTO.makeDTO(brigadeService.get(id));
            return new ResponseEntity<>(brigadeDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody BrigadeEditDTO brigadeEditDTO) {
        try {
            brigadeService.create(brigadeEditDTO);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new Brigade", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        try {
            brigadeService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
