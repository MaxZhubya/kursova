package univ.max.kursova.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import univ.max.kursova.service.impl.DataServiceImpl;

@RestController
@RequestMapping("/api/init")
public class InitDataBaseRestController {

    @Autowired
    DataServiceImpl dataService;

    @GetMapping()
    public ResponseEntity<Void> initDataBase() {
        dataService.initDataBase();
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
