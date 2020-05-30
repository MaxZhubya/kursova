package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univ.max.kursova.dto.TeamOfAreaBossDTO;
import univ.max.kursova.model.TeamOfAreaBoss;
import univ.max.kursova.service.teamOfAreaBoss.impls.TeamOfAreaBossServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/TeamOfAreaBoss")
public class TeamOfAreaBossApiRestController {

    @Autowired
    TeamOfAreaBossServiceImpl teamOfAreaBossService;

    @GetMapping("/list")
    public ResponseEntity<List<TeamOfAreaBossDTO>> getAll() {
        List<TeamOfAreaBossDTO> teamList = teamOfAreaBossService.getAll().stream()
                .map(TeamOfAreaBossDTO::makeDTO).collect(Collectors.toList());
        if (teamList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<TeamOfAreaBossDTO>>(teamList, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<TeamOfAreaBossDTO> getById(@PathVariable("id") Long id) {
        try {
            TeamOfAreaBossDTO teamDTO = TeamOfAreaBossDTO.makeDTO(teamOfAreaBossService.get(id));
            return new ResponseEntity<>(teamDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Void> create(@RequestBody TeamOfAreaBossDTO teamDTO) {
        try {
            teamOfAreaBossService.create(TeamOfAreaBoss.makeEntity(teamDTO));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Error of creating new TeamOfAreaBoss", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<TeamOfAreaBossDTO> delete(@PathVariable("id") Long id) {
        try {
            teamOfAreaBossService.delete(id);
            return new ResponseEntity<>( HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
