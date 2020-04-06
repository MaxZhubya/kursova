package univ.max.kursova.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.model.*;
import univ.max.kursova.model.enums.*;
import univ.max.kursova.repository.*;
import univ.max.kursova.service.sequence.SequenceServiceImpl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Service
public class DataServiceImpl {

    @Autowired
    private SequenceServiceImpl sequenceService;

    @Autowired
    private TechnicalPersonalRepository technicalPersonalRepository;

    @Autowired
    private BrigadeRepository brigadeRepository;

    @Autowired
    private WorkerRepository workerRepository;

    @Autowired
    private TeamOfAreaBossRepository teamOfAreaBossRepository;

    @Autowired
    private AreaRepository areaRepository;

    @Autowired
    private WorkshopRepository workshopRepository;

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Autowired
    private EquipmentForLabRepository equipmentForLabRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<TechnicalPersonal> createTechnicalPersonals() {
        return technicalPersonalRepository.saveAll(
                Arrays.asList(
                        new TechnicalPersonal()
                                .setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                                .setPersonalName("TechPersonal_1")
                                .setPersonalType(TechPersonalType.TEAM_OF_AREA_BOSS)
                                .setDescription("Description 1")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                                .setPersonalName("TechPersonal_2")
                                .setPersonalType(TechPersonalType.MASTER)
                                .setDescription("Description 2")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                                .setPersonalName("TechPersonal_3")
                                .setPersonalType(TechPersonalType.TECHNIC)
                                .setDescription("Description 3")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                                .setPersonalName("TechPersonal_4")
                                .setPersonalType(TechPersonalType.ENGINEER)
                                .setDescription("Description 4")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                                .setPersonalName("TechPersonal_5")
                                .setPersonalType(TechPersonalType.TEAM_OF_AREA_BOSS)
                                .setDescription("Description 5")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                                .setPersonalName("TechPersonal_6")
                                .setPersonalType(TechPersonalType.TECHNLOG)
                                .setDescription("Description 6")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setIdTechPersonal(getId(TechnicalPersonal.SEQUENCE_NAME))
                                .setPersonalName("TechPersonal_7")
                                .setPersonalType(TechPersonalType.TECHNIC)
                                .setDescription("Description 7")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    public List<Worker> createWorkers() {
        return workerRepository.saveAll(
                Arrays.asList(
                    new Worker()
                            .setIdWorker(getId(Worker.SEQUENCE_NAME))
                            .setWorkerName("Worker_1")
                            .setWorkerType(WorkerType.BRIGADIER)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setIdWorker(getId(Worker.SEQUENCE_NAME))
                            .setWorkerName("Worker_2")
                            .setWorkerType(WorkerType.SVARSCHIK)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setIdWorker(getId(Worker.SEQUENCE_NAME))
                            .setWorkerName("Worker_3")
                            .setWorkerType(WorkerType.SBORSCHIK)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setIdWorker(getId(Worker.SEQUENCE_NAME))
                            .setWorkerName("Worker_4")
                            .setWorkerType(WorkerType.SLUSAR)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setIdWorker(getId(Worker.SEQUENCE_NAME))
                            .setWorkerName("Worker_5")
                            .setWorkerType(WorkerType.TOKAR)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now())
                        )
        );
    }

    public List<Brigade> createBrigades() {
        return brigadeRepository.saveAll(
                Arrays.asList(
                    new Brigade()
                            .setIdBrigade(getId(Brigade.SEQUENCE_NAME))
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Brigade()
                            .setIdBrigade(getId(Brigade.SEQUENCE_NAME))
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Brigade()
                            .setIdBrigade(getId(Brigade.SEQUENCE_NAME))
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now())
                )
        );
    }

    public void setBrigadeToWorkers() {
        List<Brigade> brigades = brigadeRepository.findAll();
        List<Worker> workers = workerRepository.findAll();

        workers.get(0).setBrigade(brigades.get(0));
        workers.get(1).setBrigade(brigades.get(0));
        workers.get(2).setBrigade(brigades.get(0));
        brigades.get(0).setWorkerList(
                Arrays.asList(workers.get(0), workers.get(1), workers.get(2))
        );

        workers.get(3).setBrigade(brigades.get(1));
        workers.get(4).setBrigade(brigades.get(1));
        brigades.get(1).setWorkerList(
                Arrays.asList(workers.get(3), workers.get(4))
        );

        workerRepository.saveAll(workers);
        brigadeRepository.saveAll(brigades);
    }

    public List<TeamOfAreaBoss> createTeamsOfAreaBosses() {
        return teamOfAreaBossRepository.saveAll(
                Arrays.asList(
                        new TeamOfAreaBoss()
                                .setIdTeam(getId(TeamOfAreaBoss.SEQUENCE_NAME))
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TeamOfAreaBoss()
                                .setIdTeam(getId(TeamOfAreaBoss.SEQUENCE_NAME))
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TeamOfAreaBoss()
                                .setIdTeam(getId(TeamOfAreaBoss.SEQUENCE_NAME))
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    public void setTechPersonalToTeamOfAreaBoss() {
        List<TechnicalPersonal> technicalPersonals = technicalPersonalRepository.findAll();
        List<TeamOfAreaBoss> teamOfAreaBosses = teamOfAreaBossRepository.findAll();

        technicalPersonals.get(0).setTeamOfAreaBoss(teamOfAreaBosses.get(0));
        technicalPersonals.get(1).setTeamOfAreaBoss(teamOfAreaBosses.get(0));
        technicalPersonals.get(2).setTeamOfAreaBoss(teamOfAreaBosses.get(0));
        technicalPersonals.get(3).setTeamOfAreaBoss(teamOfAreaBosses.get(0));
        teamOfAreaBosses.get(0).setTechnicalPersonalList(
                Arrays.asList(technicalPersonals.get(0),technicalPersonals.get(1),
                        technicalPersonals.get(2),technicalPersonals.get(3))
        );

        technicalPersonals.get(4).setTeamOfAreaBoss(teamOfAreaBosses.get(1));
        technicalPersonals.get(5).setTeamOfAreaBoss(teamOfAreaBosses.get(1));
        technicalPersonals.get(6).setTeamOfAreaBoss(teamOfAreaBosses.get(1));
        teamOfAreaBosses.get(1).setTechnicalPersonalList(
                Arrays.asList(technicalPersonals.get(4),technicalPersonals.get(5),
                        technicalPersonals.get(6))
        );

        technicalPersonalRepository.saveAll(technicalPersonals);
        teamOfAreaBossRepository.saveAll(teamOfAreaBosses);
    }

    public List<Area> createAreas() {
        return areaRepository.saveAll(
                Arrays.asList(
                        new Area()
                                .setIdArea(getId(Area.SEQUENCE_NAME))
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Area()
                                .setIdArea(getId(Area.SEQUENCE_NAME))
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    public void setTeamOfAreaBossToArea() {
        List<TeamOfAreaBoss> teamOfAreaBosses = teamOfAreaBossRepository.findAll();
        List<Area> areas = areaRepository.findAll();

        teamOfAreaBosses.get(0).setArea(areas.get(0));
        areas.get(0).setTeamOfAreaBoss(teamOfAreaBosses.get(0));

        teamOfAreaBosses.get(1).setArea(areas.get(1));
        areas.get(1).setTeamOfAreaBoss(teamOfAreaBosses.get(1));

        teamOfAreaBossRepository.saveAll(teamOfAreaBosses);
        areaRepository.saveAll(areas);
    }

    public void setBrigadeToArea() {
        List<Brigade> brigades = brigadeRepository.findAll();
        List<Area> areas = areaRepository.findAll();

        brigades.get(0).setArea(areas.get(0));
        brigades.get(1).setArea(areas.get(0));
        areas.get(0).setBrigadeList(
                Arrays.asList(brigades.get(0), brigades.get(1))
        );

        brigadeRepository.saveAll(brigades);
        areaRepository.saveAll(areas);
    }

    public List<Workshop> createWorkshops() {
        return workshopRepository.saveAll(
                Arrays.asList(
                        new Workshop()
                                .setIdWorkshop(getId(Workshop.SEQUENCE_NAME))
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    public void setWorkshopToArea() {
        List<Workshop> workshops = workshopRepository.findAll();
        List<Area> areas = areaRepository.findAll();

        areas.get(0).setWorkshop(workshops.get(0));
        areas.get(1).setWorkshop(workshops.get(0));
        workshops.get(0).setAreaList(
                Arrays.asList(areas.get(0), areas.get(1))
        );

        workshopRepository.saveAll(workshops);
        areaRepository.saveAll(areas);
    }

    public List<Laboratory> createLaboratories() {
        return laboratoryRepository.saveAll(
                Arrays.asList(
                        new Laboratory()
                                .setIdLaboratory(getId(Laboratory.SEQUENCE_NAME))
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    public void setLaboratoryToWorkshop() {
        List<Workshop> workshops = workshopRepository.findAll();
        List<Laboratory> laboratories = laboratoryRepository.findAll();

        workshops.get(0).getLaboratoryList().add(laboratories.get(0));
        laboratories.get(0).setWorkshopList(
                Arrays.asList(workshops.get(0))
        );

        workshopRepository.saveAll(workshops);
        laboratoryRepository.saveAll(laboratories);
    }

    public List<EquipmentForLaboratory> createEquipmentForLabs() {
        return equipmentForLabRepository.saveAll(
                Arrays.asList(
                        new EquipmentForLaboratory()
                                .setIdEquipmentForLab(getId(EquipmentForLaboratory.SEQUENCE_NAME))
                                .setEquipmentType(EquipmentType.TESTING_STAND)
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new EquipmentForLaboratory()
                                .setIdEquipmentForLab(getId(EquipmentForLaboratory.SEQUENCE_NAME))
                                .setEquipmentType(EquipmentType.DEFECTIVE_CHECK)
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new EquipmentForLaboratory()
                                .setIdEquipmentForLab(getId(EquipmentForLaboratory.SEQUENCE_NAME))
                                .setEquipmentType(EquipmentType.ASSEMBLY_DISASSEMBLY)
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    public void setEquipmentToLaboratory() {
        List<EquipmentForLaboratory> equipmentForLaboratories = equipmentForLabRepository.findAll();
        List<Laboratory> laboratories = laboratoryRepository.findAll();

        equipmentForLaboratories.get(0).setLaboratory(laboratories.get(0));
        equipmentForLaboratories.get(1).setLaboratory(laboratories.get(0));
        equipmentForLaboratories.get(2).setLaboratory(laboratories.get(0));

        equipmentForLabRepository.saveAll(equipmentForLaboratories);
        laboratoryRepository.saveAll(laboratories);
    }

    public List<Product> createProducts() {
        return productRepository.saveAll(
                Arrays.asList(
                        new Product()
                                .setIdProduct(getId(Product.SEQUENCE_NAME))
                                .setCategory(ProductCategory.AVTOBUS)
                                .setType(ProductType.SAMOSVAL)
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Product()
                                .setIdProduct(getId(Product.SEQUENCE_NAME))
                                .setCategory(ProductCategory.GRUSOVIY)
                                .setType(ProductType.HACHBEK)
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Product()
                                .setIdProduct(getId(Product.SEQUENCE_NAME))
                                .setCategory(ProductCategory.LEHKOVIY)
                                .setType(ProductType.SEDAN)
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    public void setProductToArea() {
        List<Area> areaList = areaRepository.findAll();
        List<Product> productList = productRepository.findAll();

        productList.get(0).setCurrentArea(areaList.get(0));
        productList.get(1).setCurrentArea(areaList.get(0));
        productList.get(2).setCurrentArea(areaList.get(0));

        areaRepository.saveAll(areaList);
        productRepository.saveAll(productList);
    }

    public void setLaboratoryToProduct() {
        List<Laboratory> laboratoryList = laboratoryRepository.findAll();
        List<Product> productList = productRepository.findAll();

        productList.get(0).setCurrentLaboratory(laboratoryList.get(0));
        productList.get(1).setCurrentLaboratory(laboratoryList.get(0));
        productList.get(2).setCurrentLaboratory(laboratoryList.get(0));

        laboratoryRepository.saveAll(laboratoryList);
        productRepository.saveAll(productList);
    }

    private Long getId(String sequenceName) {
        return sequenceService.generateSequence(sequenceName);
    }
}
