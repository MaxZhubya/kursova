package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import univ.max.kursova.dto.AreaDTO;
import univ.max.kursova.dto.AreaEditDTO;
import univ.max.kursova.exception.DataNotFoundException;
import univ.max.kursova.exception.DataValidationException;
import univ.max.kursova.model.*;
import univ.max.kursova.repository.AreaRepository;
import univ.max.kursova.service.IAreaService;
import univ.max.kursova.service.IBrigadeService;
import univ.max.kursova.service.IProductService;
import univ.max.kursova.service.ITeamOfAreaBossService;
import univ.max.kursova.service.IWorkshopService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
public class AreaServiceImpl implements IAreaService {

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

    @Override
    @Transactional(readOnly = true)
    public AreaDTO get(Long id) {
        return AreaDTO.makeDTO(getEntity(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<AreaDTO> getAll() {
        return repository.findByOrderByIdAreaAsc().stream()
                .map(AreaDTO::makeDTO).collect(Collectors.toList());
    }

    @Override
    public AreaDTO create(AreaEditDTO areaEditDTO) {
        Area area = new Area()
                .setDateCreated(LocalDateTime.now())
                .setDateModified(LocalDateTime.now());
        area = repository.save(area);

        // Set data from AreaEditDTO
        setInputData(area, areaEditDTO);

        return AreaDTO.makeDTO(repository.save(area));
    }

    @Override
    public AreaDTO update(AreaEditDTO areaEditDTO) {
        if (Objects.isNull(areaEditDTO.getIdArea()))
            throw new DataValidationException("ID can not be null!");

        // Get existed Area
        Area area = getEntity(areaEditDTO.getIdArea())
                  .setDateModified(LocalDateTime.now());

        // Remove current Area from all to handle case if some data was deleted
        clearRelatedData(area);

        // Set data from AreaEditDTO
        setInputData(area, areaEditDTO);

        return AreaDTO.makeDTO(repository.save(area));
    }

    @Override
    public void delete(Long id) {
        Area area = getEntity(id);

        // Remove current Area from all
        clearRelatedData(area);

        repository.delete(area);
    }

    @Override
    public Area save(Area area) {
        return repository.save(area);
    }

    @Override
    public Area getEntity(Long id) {
        return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Area with id: "
                + id.toString() + " is not existed"));
    }

    @Override
    public List<Area> getEntitiesByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

    private void setInputData(final Area area, AreaEditDTO areaEditDTO) {
        // Set Workshop
        if (Objects.nonNull(areaEditDTO.getIdWorkshop())) {
            area.setWorkshop(workshopService.getEntity(areaEditDTO.getIdWorkshop()));
        }

        // Set Definition
        area.setDefinition(areaEditDTO.getDefinition());

        // Set TeamOfAreaBoss
        if (Objects.nonNull(areaEditDTO.getIdTeamOfAreaBoss())) {
            TeamOfAreaBoss teamOfAreaBoss = teamOfAreaBossService.getEntity(areaEditDTO.getIdTeamOfAreaBoss())
                    .setArea(area);
            area.setTeamOfAreaBoss(teamOfAreaBoss);
        }

        // Set Brigades
        if (!areaEditDTO.getBrigadeIdList().isEmpty()) {
            List<Brigade> brigadeList = brigadeService.getEntitiesByIds(areaEditDTO.getBrigadeIdList());
            if (brigadeList.size() != areaEditDTO.getBrigadeIdList().size())
                throw new DataValidationException("The Brigade ids are wrong!");
            brigadeList.forEach(brigade -> brigade.setArea(area));
            area.setBrigadeList(brigadeList);
        }

        // Set Products
        if (!areaEditDTO.getProductIdList().isEmpty()) {
            List<Product> productList = productService.getEntitiesByIds(areaEditDTO.getProductIdList());
            if (productList.size() != areaEditDTO.getProductIdList().size())
                throw new DataValidationException("The Product ids are wrong!");
            productList.forEach(product -> product.setArea(area));
            area.setProductList(productList);
        }
    }

    private void clearRelatedData(Area area) {
        TeamOfAreaBoss teamOfAreaBoss = area.getTeamOfAreaBoss();
        if (Objects.nonNull(teamOfAreaBoss)) {
            teamOfAreaBoss.setArea(null);
            teamOfAreaBossService.save(teamOfAreaBoss);
        }
        area.setTeamOfAreaBoss(null);

        List<Brigade> brigadeList = area.getBrigadeList();
        brigadeList.forEach(brigade -> brigade.setArea(null));
        brigadeService.save(brigadeList);
        area.getBrigadeList().clear();

        List<Product> productList = area.getProductList();
        productList.forEach(value -> value.setArea(null));
        productService.save(productList);
        area.getProductList().clear();

        Workshop workshop = area.getWorkshop();
        if (Objects.nonNull(workshop)) {
            workshop.getAreaList().remove(area);
            workshopService.save(workshop);
        }
        area.setWorkshop(null);
    }

}
