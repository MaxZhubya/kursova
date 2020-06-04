package univ.max.kursova.view;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import univ.max.kursova.dto.TeamOfAreaBossDTO;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.model.*;
import univ.max.kursova.model.enums.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Views {

    public static class AreaView { }

    public static class TeamOfAreaBossView { }

    public static class WorkerView { }

    public static class BrigadeView { }

    public static class TechnicalPersonalView { }

    public static class WorkshopView { }

    public static class ProductView { }

    public static class LaboratoryView { }

    public static class EquipmentForLaboratoryView { }
}
