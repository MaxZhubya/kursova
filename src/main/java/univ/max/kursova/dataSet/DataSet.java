package univ.max.kursova.dataSet;

import org.springframework.stereotype.Component;
import univ.max.kursova.model.TechnicalPersonal;
import univ.max.kursova.model.enums.PersonalType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class DataSet {
    private List<TechnicalPersonal> technicalPersonalList = new ArrayList<>(Arrays.asList(
            new TechnicalPersonal(1, "Vasya Pupkin", PersonalType.ENGINEER,
                    LocalDateTime.now(), LocalDateTime.now(), "First tech. person"),
            new TechnicalPersonal(2, "Alexander Mell", PersonalType.SBORSCHIK,
                    LocalDateTime.now(), LocalDateTime.now(), "Second tech. person")
    ));

    public List<TechnicalPersonal> getTechnicalPersonalList() {
        return technicalPersonalList;
    }

    public void setTechnicalPersonalList(List<TechnicalPersonal> technicalPersonalList) {
        this.technicalPersonalList = technicalPersonalList;
    }
}
