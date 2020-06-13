package univ.max.kursova.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import univ.max.kursova.model.Brigade;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;
import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@JsonPropertyOrder({"brigadeId", "created", "modified", "area", "workers"})
public class BrigadeDTO {

    @JsonProperty("brigadeId")
    private Long idBrigade;

    @JsonInclude(NON_EMPTY)
    @JsonProperty("workers")
    private List<WorkerDTO> workerList = new ArrayList<>();

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

    public Long getIdBrigade() {
        return idBrigade;
    }

    public BrigadeDTO setIdBrigade(Long idBrigade) {
        this.idBrigade = idBrigade;
        return this;
    }

    public List<WorkerDTO> getWorkerList() {
        return workerList;
    }

    public BrigadeDTO setWorkerList(List<WorkerDTO> workerList) {
        this.workerList = workerList;
        return this;
    }

    public AreaDTO getArea() {
        return area;
    }

    public BrigadeDTO setArea(AreaDTO area) {
        this.area = area;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public BrigadeDTO setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public BrigadeDTO setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public static BrigadeDTO makeDTO(Brigade brigade) {
        return new BrigadeDTO()
                .setIdBrigade(brigade.getIdBrigade())

                .setWorkerList(brigade.getWorkerList().stream()
                    .map(WorkerDTO::makeSimpleDTO).collect(Collectors.toList()))

                .setArea(AreaDTO.makeSimpleDTO(brigade.getArea()))
                .setDateCreated(brigade.getDateCreated())
                .setDateModified(brigade.getDateModified());
    }

    public static BrigadeDTO makeSimpleDTO(Brigade brigade) {
        return (brigade != null) ? new BrigadeDTO()
                .setIdBrigade(brigade.getIdBrigade())
                .setDateCreated(brigade.getDateCreated())
                .setDateModified(brigade.getDateModified()) : null;
    }
}
