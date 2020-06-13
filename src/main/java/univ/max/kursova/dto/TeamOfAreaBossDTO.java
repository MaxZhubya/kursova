package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import univ.max.kursova.model.TeamOfAreaBoss;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@JsonPropertyOrder({"teamId", "created", "modified", "area", "technicalPersonals"})
public class TeamOfAreaBossDTO {

    @JsonProperty("teamId")
    private Long idTeam;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("technicalPersonals")
    private List<TechnicalPersonalDTO> technicalPersonalList = new ArrayList<>();

    @JsonInclude(NON_EMPTY)
    @JsonProperty("area")
    private AreaDTO area;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    @JsonProperty("created")
    private LocalDateTime dateCreated;

    @JsonInclude(NON_NULL)
    @JsonFormat(pattern="yyyy-MM-dd")
    @JsonProperty("modified")
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

    public AreaDTO getArea() {
        return area;
    }

    public TeamOfAreaBossDTO setArea(AreaDTO area) {
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
                .setTechnicalPersonalList(teamOfAreaBoss.getTechnicalPersonalList().stream()
                    .map(TechnicalPersonalDTO::makeSimpleDTO).collect(Collectors.toList()))
                .setArea(AreaDTO.makeSimpleDTO(teamOfAreaBoss.getArea()))
                .setDateCreated(teamOfAreaBoss.getDateCreated())
                .setDateModified(teamOfAreaBoss.getDateModified());
        else
            return null;
    }

    public static TeamOfAreaBossDTO makeSimpleDTO(TeamOfAreaBoss teamOfAreaBoss) {
        if (teamOfAreaBoss != null)
            return new TeamOfAreaBossDTO()
                    .setIdTeam(teamOfAreaBoss.getIdTeam())
                    .setDateCreated(teamOfAreaBoss.getDateCreated())
                    .setDateModified(teamOfAreaBoss.getDateModified());
        else
            return null;
    }
}
