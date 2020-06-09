package univ.max.kursova.service.area.impls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.AreaEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.*;
import univ.max.kursova.model.enums.ActionType;
import univ.max.kursova.repository.AreaRepository;
import univ.max.kursova.service.area.interfaces.IAreaService;
import univ.max.kursova.service.brigade.interfaces.IBrigadeService;
import univ.max.kursova.service.product.interfaces.IProductService;
import univ.max.kursova.service.sequence.SequenceServiceImpl;
import univ.max.kursova.service.teamOfAreaBoss.interfaces.ITeamOfAreaBossService;
import univ.max.kursova.service.workshop.interfaces.IWorkshopService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class AreaServiceImpl implements IAreaService {

    @Autowired
    private SequenceServiceImpl sequenceService;

    @Autowired
    private ITeamOfAreaBossService teamOfAreaBossService;

    @Autowired
    private IBrigadeService brigadeService;

    @Autowired
    private IProductService productService;

    @Autowired
    private IWorkshopService workshopService;

    @Autowired
    private AreaRepository repository;

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
    /*----------------------------------------------------------------*/

    @Override
    public Area get(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Area with is: "
                + id.toString() + "is not existed"));
    }

    @Override
    public List<Area> getAll() {
        return repository.findAll();
    }

    @Override
    public Area create(AreaEditDTO areaEditDTO) {
        Area area = new Area()
                .setIdArea(sequenceService.generateSequence(Area.SEQUENCE_NAME))
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());

        // Set data from AreaEditDTO
        setAreaData(area, areaEditDTO);
        area = repository.save(area);
        // Update all Area related data
        updateRelatedData(area, ActionType.CREATE);

        return repository.save(area);
    }

    @Override
    public Area update(AreaEditDTO areaEditDTO) {
        if (Objects.isNull(areaEditDTO.getIdArea()))
            throw new DataValidationException("Area id can not be null!");

        // Get existed Area
        Area area = get(areaEditDTO.getIdArea())
                  .setDateModified(LocalDateTime.now());

        // Remove current Area from all to handle case if some data was deleted
        updateRelatedData(area, ActionType.DELETE);
        // Set data from AreaEditDTO
        setAreaData(area, areaEditDTO);
        // Update all Area related data
        updateRelatedData(area, ActionType.CREATE);

        return repository.save(area);
    }

    @Override
    public void delete(Long id) {
        Area area = repository.findById(id).orElseThrow(() -> new DataNotFoundException("Area with is: "
                + id.toString() + "is not existed"));

        // Update all Area related data
        updateRelatedData(area, ActionType.DELETE);
        repository.deleteById(id);
    }

    @Override
    public Area save(Area area) {
        return repository.save(area);
    }

    private void setAreaData(Area area, AreaEditDTO areaEditDTO) {
        // Set TeamOfAreaBoss
        area.setTeamOfAreaBoss(null);
        if (Objects.nonNull(areaEditDTO.getIdTeamOfAreaBoss())) {
            area.setTeamOfAreaBoss(teamOfAreaBossService.get(areaEditDTO.getIdTeamOfAreaBoss()));
        }

        // Set Brigades
        area.getBrigadeList().clear();
        if (!areaEditDTO.getBrigadeIdList().isEmpty()) {
            List<Brigade> brigadeList = brigadeService.getByIds(areaEditDTO.getBrigadeIdList());
            if (brigadeList.size() != areaEditDTO.getBrigadeIdList().size())
                throw new DataValidationException("The Brigade ids are wrong!");
            area.setBrigadeList(brigadeList);
        }

        // Set Products
        area.getProductList().clear();
        if (Objects.nonNull(areaEditDTO.getProductIdList()) && !areaEditDTO.getProductIdList().isEmpty()) {
            List<Product> productList = productService.getByIds(areaEditDTO.getProductIdList());
            if (productList.size() != areaEditDTO.getProductIdList().size())
                throw new DataValidationException("The Product ids are wrong!");
            area.setProductList(productList);
        }

        // Set Workshop
        area.setWorkshop(null);
        if (Objects.nonNull(areaEditDTO.getIdWorkshop())) {
            area.setWorkshop(workshopService.get(areaEditDTO.getIdWorkshop()));
        }

        area.setDefinition(areaEditDTO.getDefinition());
    }

    private void updateRelatedData(Area area, ActionType actionType) {
        TeamOfAreaBoss teamOfAreaBoss = area.getTeamOfAreaBoss();
        if (Objects.nonNull(teamOfAreaBoss)) {
            if (actionType.equals(ActionType.CREATE)) {
                if (Objects.nonNull(teamOfAreaBoss.getArea())) {
                    repository.findById(teamOfAreaBoss.getArea().getIdArea())
                            .ifPresent(currentArea -> {
                                currentArea.setTeamOfAreaBoss(null);
                                repository.save(currentArea);
                            });
                }
                teamOfAreaBoss.setArea(area);
            }
            if (actionType.equals(ActionType.DELETE))
                teamOfAreaBoss.setArea(null);
            teamOfAreaBossService.save(teamOfAreaBoss);
        }

        List<Brigade> brigadeList = area.getBrigadeList();
        if (actionType.equals(ActionType.CREATE))
            brigadeList.stream().forEach(brigade -> {
                if (Objects.nonNull(brigade.getArea())) {
                    repository.findById(brigade.getArea().getIdArea())
                            .ifPresent(currentArea -> {
                                currentArea.getBrigadeList().remove(brigade);
                                repository.save(currentArea);
                            });
                }
                brigade.setArea(area);
            });
        if (actionType.equals(ActionType.DELETE))
            brigadeList.stream().forEach(brigade -> brigade.setArea(null));
        brigadeService.save(brigadeList);

        List<Product> productList = area.getProductList();
        if (actionType.equals(ActionType.CREATE))
            productList.stream().forEach(product -> {
                if (Objects.nonNull(product.getArea())) {
                    repository.findById(product.getArea().getIdArea())
                            .ifPresent(currentArea -> {
                                currentArea.getProductList().remove(product);
                                repository.save(currentArea);
                            });
                }
                product.setArea(area);
            });
        if (actionType.equals(ActionType.DELETE))
            productList.stream().forEach(value -> value.setArea(null));
        productService.save(productList);

        Workshop workshop = area.getWorkshop();
        if (Objects.nonNull(workshop)) {
            if (actionType.equals(ActionType.CREATE))
                workshop.getAreaList().add(area);
            if (actionType.equals(ActionType.DELETE))
                workshop.getAreaList().remove(area);
            workshopService.save(workshop);
        }
    }

}
