package univ.max.kursova.controller.api;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.WorkerDTO;
import univ.max.kursova.model.Worker;
import univ.max.kursova.service.worker.impls.WorkerServiceImpl;
import univ.max.kursova.view.Views;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/Worker")
public class WorkerApiRestController {

    @Autowired
    WorkerServiceImpl workerService;

    //@JsonView(Views.WorkerView.class)
    @GetMapping("/list")
    public ResponseEntity<List<WorkerDTO>> getAll() {
        List<WorkerDTO> workerList = workerService.getAll().stream()
                .map(WorkerDTO::makeDTO).collect(Collectors.toList());
        if (workerList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<WorkerDTO>>(workerList, HttpStatus.OK);
    }

    //@JsonView(Views.WorkerView.class)
    @GetMapping("/list/{id}")
    public ResponseEntity<WorkerDTO> getById(@PathVariable("id") Long id) {
        try {
            WorkerDTO workerDTO = WorkerDTO.makeDTO(workerService.get(id));
            return new ResponseEntity<>(workerDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //@JsonView(Views.WorkerView.class)
    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody WorkerDTO workerDTO) {
        try {
            workerService.create(Worker.makeEntity(workerDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new Worker", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //@JsonView(Views.WorkerView.class)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        try {
            workerService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

}
