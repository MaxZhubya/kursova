package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import univ.max.kursova.model.Area;
import univ.max.kursova.model.TeamOfAreaBoss;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class TeamOfAreaBossDTO {

    private Long idTeam;
    private List<TechnicalPersonalDTO> technicalPersonalList;
    @JsonIgnore
    private Area area;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateCreated;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDateTime dateModified;

    public Long getIdTeam() {
        return idTeam;
    }

    public TeamOfAreaBossDTO setIdTeam(Long idTeam) {
        this.idTeam = idTeam;
        return this;
    }

    public List<TechnicalPersonalDTO> getTechnicalPersonalList() {
        return technicalPersonalList;
    }

    public TeamOfAreaBossDTO setTechnicalPersonalList(List<TechnicalPersonalDTO> technicalPersonalList) {
        this.technicalPersonalList = technicalPersonalList;
        return this;
    }

    public Area getArea() {
        return area;
    }

    public TeamOfAreaBossDTO setArea(Area area) {
        this.area = area;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public TeamOfAreaBossDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public TeamOfAreaBossDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static TeamOfAreaBossDTO makeDTO(TeamOfAreaBoss teamOfAreaBoss) {
        if (teamOfAreaBoss != null)
            return new TeamOfAreaBossDTO()
                .setIdTeam(teamOfAreaBoss.getIdTeam())
                //.setArea(teamOfAreaBoss.getArea())
                .setDateCreated(teamOfAreaBoss.getDateCreated())
                .setDateModified(teamOfAreaBoss.getDateModified());
                /*  .setTechnicalPersonalList(teamOfAreaBoss.getTechnicalPersonalList().stream()
                        .map(TechnicalPersonalDTO::makeDTO).collect(Collectors.toList()));  */
        else
            return null;
    }
}
