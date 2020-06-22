package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.WorkerDTO;
import univ.max.kursova.dto.WorkerEditDTO;
import univ.max.kursova.service.IWorkerService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/worker")
public class WorkerApiRestController {

    @Autowired
    IWorkerService workerService;

    @GetMapping("/list")
    public ResponseEntity<List<WorkerDTO>> getAll() {
        return new ResponseEntity<>(workerService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<WorkerDTO> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(workerService.get(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<WorkerDTO> create(@RequestBody @Valid WorkerEditDTO workerEditDTO) {
        return new ResponseEntity<>(workerService.create(workerEditDTO), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<WorkerDTO> update(@RequestBody @Valid WorkerEditDTO workerEditDTO) {
        return new ResponseEntity<>(workerService.update(workerEditDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        workerService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
