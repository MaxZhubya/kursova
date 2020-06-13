package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.TeamOfAreaBossDTO;
import univ.max.kursova.dto.TeamOfAreaBossEditDTO;
import univ.max.kursova.service.ITeamOfAreaBossService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/teamOfAreaBoss")
public class TeamOfAreaBossApiRestController {

    @Autowired
    ITeamOfAreaBossService teamOfAreaBossService;

    @GetMapping("/list")
    public ResponseEntity<List<TeamOfAreaBossDTO>> getAll() {
        return new ResponseEntity<>(teamOfAreaBossService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<TeamOfAreaBossDTO> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(teamOfAreaBossService.get(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TeamOfAreaBossDTO> create(@RequestBody @Valid TeamOfAreaBossEditDTO teamEditDTO) {
        return new ResponseEntity<>(teamOfAreaBossService.create(teamEditDTO), HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<TeamOfAreaBossDTO> update(@RequestBody @Valid TeamOfAreaBossEditDTO teamEditDTO) {
        return new ResponseEntity<>(teamOfAreaBossService.update(teamEditDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        teamOfAreaBossService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
