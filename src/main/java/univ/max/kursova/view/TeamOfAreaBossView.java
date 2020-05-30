package univ.max.kursova.view;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import univ.max.kursova.dto.AreaDTO;
import univ.max.kursova.dto.TechnicalPersonalDTO;
import univ.max.kursova.model.Area;

import java.time.LocalDateTime;
import java.util.List;

public class TeamOfAreaBossView {

    @JsonView(TeamOfAreaBossView.class)
    private Long idTeam;

    @JsonView(TeamOfAreaBossView.class)
    private List<TechnicalPersonalDTO> technicalPersonalList;

    @JsonView(AreaView.class)
    private Area area;

    @JsonView(TeamOfAreaBossView.class)
    private LocalDateTime dateCreated;

    @JsonView(TeamOfAreaBossView.class)
    private LocalDateTime dateModified;

    @JsonView(TeamOfAreaBossView.class)
    public Long getIdTeam() {
        return idTeam;
    }

    public TeamOfAreaBossView setIdTeam(Long idTeam) {
        this.idTeam = idTeam;
        return this;
    }

    public List<TechnicalPersonalDTO> getTechnicalPersonalList() {
        return technicalPersonalList;
    }

    public TeamOfAreaBossView setTechnicalPersonalList(List<TechnicalPersonalDTO> technicalPersonalList) {
        this.technicalPersonalList = technicalPersonalList;
        return this;
    }

    public Area getArea() {
        return area;
    }

    public TeamOfAreaBossView setArea(Area area) {
        this.area = area;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public TeamOfAreaBossView setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public TeamOfAreaBossView setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }
}
