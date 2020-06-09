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
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/teamOfAreaBoss")
public class TeamOfAreaBossApiRestController {

    @Autowired
    ITeamOfAreaBossService teamOfAreaBossService;

    @GetMapping("/list")
    public ResponseEntity<List<TeamOfAreaBossDTO>> getAll() {
        List<TeamOfAreaBossDTO> teamList = teamOfAreaBossService.getAll().stream()
                .map(TeamOfAreaBossDTO::makeDTO).collect(Collectors.toList());
        return new ResponseEntity<>(teamList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<TeamOfAreaBossDTO> getById(@PathVariable("id") Long id) {
        TeamOfAreaBossDTO teamDTO = TeamOfAreaBossDTO.makeDTO(teamOfAreaBossService.get(id));
        return new ResponseEntity<>(teamDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TeamOfAreaBossDTO> create(@RequestBody @Valid TeamOfAreaBossEditDTO teamEditDTO) {
        TeamOfAreaBossDTO teamOfAreaBossDTO = TeamOfAreaBossDTO.makeDTO(teamOfAreaBossService.create(teamEditDTO));
        return new ResponseEntity<>(teamOfAreaBossDTO, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<TeamOfAreaBossDTO> update(@RequestBody @Valid TeamOfAreaBossEditDTO teamEditDTO) {
        TeamOfAreaBossDTO teamOfAreaBossDTO = TeamOfAreaBossDTO.makeDTO(teamOfAreaBossService.update(teamEditDTO));
        return new ResponseEntity<>(teamOfAreaBossDTO, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        teamOfAreaBossService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
