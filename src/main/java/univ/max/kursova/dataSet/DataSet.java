package univ.max.kursova.dataSet;

import org.springframework.stereotype.Component;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.enums.PersonalType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class DataSet {
    private List<TechnicalPersonal> technicalPersonalList = new ArrayList<>(Arrays.asList(
            new TechnicalPersonal(1L, "Vasya Pupkin", PersonalType.ENGINEER,
                    LocalDateTime.now(), LocalDateTime.now(), "First tech. person"),
            new TechnicalPersonal(2L, "Alexander Mell", PersonalType.SBORSCHIK,
                    LocalDateTime.now(), LocalDateTime.now(), "Second tech. person"),
            new TechnicalPersonal(3L, "Valera Demitrow", PersonalType.SLUSAR,
                                  LocalDateTime.now(), LocalDateTime.now(), "Third tech. person"),
            new TechnicalPersonal(4L, "Sergey Lans", PersonalType.SVARSCHIK,
                                  LocalDateTime.now(), LocalDateTime.now(), "Fourth tech. person")
    ));

    private List<Worker> workerList = new ArrayList<>(Arrays.asList(
            new Worker(1L, "Georgiy Dragunov", PersonalType.TECHNLOG,
                    LocalDateTime.now(), LocalDateTime.now()),
            new Worker(2L, "Valera Harkov", PersonalType.SBORSCHIK,
                    LocalDateTime.now(), LocalDateTime.now()),
            new Worker(3L, "Leonid Vasilevich", PersonalType.TECHNIC,
                    LocalDateTime.now(), LocalDateTime.now()),
            new Worker(4L, "Hariton Alexandrow", PersonalType.SLUSAR,
                    LocalDateTime.now(), LocalDateTime.now())
    ));

    private List<Brigade> brigadeList = new ArrayList<>(Arrays.asList(
            new Brigade(1L, , workerList, LocalDateTime.now(), LocalDateTime.now())
    ));

    public List<TechnicalPersonal> getTechnicalPersonalList() {
        return technicalPersonalList;
    }

    public void setTechnicalPersonalList(List<TechnicalPersonal> technicalPersonalList) {
        this.technicalPersonalList = technicalPersonalList;
    }

    public List<Worker> getWorkerList() {
        return workerList;
    }

    public void setWorkerList(List<Worker> workerList) {
        this.workerList = workerList;
    }
}
