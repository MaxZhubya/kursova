package univ.max.kursova.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.service.techPersonal.impl.TechPersonalServiceImpl;
import univ.max.kursova.view.Views;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/TechnicalPersonal")
public class TechPersonalApiRestController {

    @Autowired
    TechPersonalServiceImpl techPersonalServiceImpl;

    //@JsonView(Views.TechnicalPersonalView.class)
    @GetMapping("/list")
    public ResponseEntity<List<TechnicalPersonalDTO>> getAll() {
        List<TechnicalPersonalDTO> technicalList = techPersonalServiceImpl.getAll().stream()
                .map(TechnicalPersonalDTO::makeDTO).collect(Collectors.toList());
        if (technicalList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<TechnicalPersonalDTO>>(technicalList, HttpStatus.OK);
    }

    //@JsonView(Views.TechnicalPersonalView.class)
    @GetMapping("/list/{id}")
    public ResponseEntity<TechnicalPersonalDTO> getById(@PathVariable("id") Long id) {
        try {
            TechnicalPersonalDTO technicalDTO = TechnicalPersonalDTO.makeDTO(techPersonalServiceImpl.get(id));
            return new ResponseEntity<>(technicalDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //@JsonView(Views.TechnicalPersonalView.class)
    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody TechnicalPersonalDTO technicalDTO) {
        try {
            techPersonalServiceImpl.create(TechnicalPersonal.makeEntity(technicalDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new TechnicalPersonal", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //@JsonView(Views.TechnicalPersonalView.class)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<TechnicalPersonalDTO> delete(@PathVariable("id") Long id) {
        try {
            techPersonalServiceImpl.delete(id);
            return new ResponseEntity<>( HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
