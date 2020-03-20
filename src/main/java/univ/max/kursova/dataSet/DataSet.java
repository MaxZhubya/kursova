package univ.max.kursova.dataSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.QualifierAnnotationAutowireCandidateResolver;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import sun.text.resources.cldr.id.FormatData_id;
import univ.max.kursova.model.Brigade;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.Worker;
import univ.max.kursova.model.enums.PersonalType;
import univ.max.kursova.repository.WorkerRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@Transactional
public class DataSet {

    @Autowired
    private WorkerRepository workerRepository;

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
            new Brigade(1L, new Worker(5L, "Konstantin Voronov", PersonalType.SBORSCHIK,
                    LocalDateTime.now(), LocalDateTime.now()),
                    getWorkerList(),
                    LocalDateTime.now(), LocalDateTime.now())
//            new Brigade(2L, null, getWorkerList(),
//                    LocalDateTime.now(), LocalDateTime.now())
    ));

//    public Brigade createBrigada() throws Exception {
//        Worker worker = workerRepository.findById(1L).orElseThrow(() -> new Exception("Worker with id is not existed in DB"));
//        List<Worker> workerList = workerRepository.findAllByIdWorkerIn(Arrays.asList(2L, 3L));
//        return new Brigade(1L, worker, workerList,
//                LocalDateTime.now(), LocalDateTime.now());
//    }

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

    public List<Brigade> getBrigadeList() {
        return brigadeList;
    }

    public void setBrigadeList(List<Brigade> brigadeList) {
        this.brigadeList = brigadeList;
    }
}
