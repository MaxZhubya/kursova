package univ.max.kursova.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import univ.max.kursova.exception.ApplicationException;
import univ.max.kursova.model.*;
import univ.max.kursova.model.enums.*;
import univ.max.kursova.repository.*;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Service
@Transactional
public class DataServiceImpl {

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
    private EquipmentRepository equipmentRepository;

    @Autowired
    private ProductRepository productRepository;

    public void initDataBase() {
        try {
            createTechnicalPersonals();       //      TechnicalPersonal
            createWorkers();                  //      Worker
            createBrigades();                 //      Brigade
            setBrigadeToWorkers();            //      Brigade - Worker
            createTeamsOfAreaBosses();        //      TeamOfAreaBoss
            setTechPersonalToTeamOfAreaBoss(); //     TechnicalPersonal - TeamOfAreaBoss
            createAreas();                    //      Area
            setTeamOfAreaBossToArea();        //      Area - TeamOfAreaBoss
            setBrigadeToArea();               //      Area - Brigade
            createWorkshops();                //      Workshop
            setWorkshopToArea();              //      Workshop - Area
            createLaboratories();             //      Laboratory
            setLaboratoryToWorkshop();        //      Laboratory - Workshop
            createEquipmentForLabs();           //      Equipment
            setEquipmentToLaboratory();         //      Equipment - Laboratory
            createProducts();
            setProductToArea();
            setLaboratoryToProduct();
        } catch (Exception e) {
            throw new ApplicationException("Initiating DB Exception: " + e.getMessage());
        }
    }

    private List<TechnicalPersonal> createTechnicalPersonals() {
        return technicalPersonalRepository.saveAll(
                Arrays.asList(
                        new TechnicalPersonal()
                                .setPersonalName("TechPersonal_1")
                                .setPersonalType(TechPersonalType.TEAM_OF_AREA_BOSS)
                                .setDefinition("Description 1")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setPersonalName("TechPersonal_2")
                                .setPersonalType(TechPersonalType.MASTER)
                                .setDefinition("Description 2")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setPersonalName("TechPersonal_3")
                                .setPersonalType(TechPersonalType.TECHNIC)
                                .setDefinition("Description 3")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setPersonalName("TechPersonal_4")
                                .setPersonalType(TechPersonalType.ENGINEER)
                                .setDefinition("Description 4")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setPersonalName("TechPersonal_5")
                                .setPersonalType(TechPersonalType.TEAM_OF_AREA_BOSS)
                                .setDefinition("Description 5")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setPersonalName("TechPersonal_6")
                                .setPersonalType(TechPersonalType.TECHNOLOG)
                                .setDefinition("Description 6")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TechnicalPersonal()
                                .setPersonalName("TechPersonal_7")
                                .setPersonalType(TechPersonalType.TECHNIC)
                                .setDefinition("Description 7")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    private List<Worker> createWorkers() {
        return workerRepository.saveAll(
                Arrays.asList(
                    new Worker()
                            .setWorkerName("Worker_1")
                            .setWorkerType(WorkerType.BRIGADIER)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setWorkerName("Worker_2")
                            .setWorkerType(WorkerType.SVARSCHIK)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setWorkerName("Worker_3")
                            .setWorkerType(WorkerType.SBORSCHIK)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setWorkerName("Worker_4")
                            .setWorkerType(WorkerType.SLUSAR)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Worker()
                            .setWorkerName("Worker_5")
                            .setWorkerType(WorkerType.TOKAR)
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now())
                        )
        );
    }

    private List<Brigade> createBrigades() {
        return brigadeRepository.saveAll(
                Arrays.asList(
                    new Brigade()
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Brigade()
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now()),
                    new Brigade()
                            .setDateCreated(LocalDateTime.now())
                            .setDateModified(LocalDateTime.now())
                )
        );
    }

    private void setBrigadeToWorkers() {
        List<Brigade> brigades = brigadeRepository.findAll();
        List<Worker> workers = workerRepository.findAll();

        workers.get(0).setBrigade(brigades.get(0));
        workers.get(1).setBrigade(brigades.get(0));
        workers.get(2).setBrigade(brigades.get(0));

        workers.get(3).setBrigade(brigades.get(1));
        workers.get(4).setBrigade(brigades.get(1));

        workerRepository.saveAll(workers);
    }

    private List<TeamOfAreaBoss> createTeamsOfAreaBosses() {
        return teamOfAreaBossRepository.saveAll(
                Arrays.asList(
                        new TeamOfAreaBoss()
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TeamOfAreaBoss()
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new TeamOfAreaBoss()
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    private void setTechPersonalToTeamOfAreaBoss() {
        List<TechnicalPersonal> technicalPersonals = technicalPersonalRepository.findAll();
        List<TeamOfAreaBoss> teamOfAreaBosses = teamOfAreaBossRepository.findAll();

        technicalPersonals.get(0).setTeamOfAreaBoss(teamOfAreaBosses.get(0));
        technicalPersonals.get(1).setTeamOfAreaBoss(teamOfAreaBosses.get(0));
        technicalPersonals.get(2).setTeamOfAreaBoss(teamOfAreaBosses.get(0));
        technicalPersonals.get(3).setTeamOfAreaBoss(teamOfAreaBosses.get(0));

        technicalPersonals.get(4).setTeamOfAreaBoss(teamOfAreaBosses.get(1));
        technicalPersonals.get(5).setTeamOfAreaBoss(teamOfAreaBosses.get(1));
        technicalPersonals.get(6).setTeamOfAreaBoss(teamOfAreaBosses.get(1));

        technicalPersonalRepository.saveAll(technicalPersonals);
    }

    private List<Area> createAreas() {
        return areaRepository.saveAll(
                Arrays.asList(
                        new Area()
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Area()
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    private void setTeamOfAreaBossToArea() {
        List<TeamOfAreaBoss> teamOfAreaBosses = teamOfAreaBossRepository.findAll();
        List<Area> areas = areaRepository.findAll();

        teamOfAreaBosses.get(0).setArea(areas.get(0));

        teamOfAreaBosses.get(1).setArea(areas.get(1));

        teamOfAreaBossRepository.saveAll(teamOfAreaBosses);
    }

    private void setBrigadeToArea() {
        List<Brigade> brigades = brigadeRepository.findAll();
        List<Area> areas = areaRepository.findAll();

        brigades.get(0).setArea(areas.get(0));
        brigades.get(1).setArea(areas.get(0));

        brigadeRepository.saveAll(brigades);
    }

    private List<Workshop> createWorkshops() {
        return workshopRepository.saveAll(
                Arrays.asList(
                        new Workshop()
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    private void setWorkshopToArea() {
        List<Workshop> workshops = workshopRepository.findAll();
        List<Area> areas = areaRepository.findAll();

        areas.get(0).setWorkshop(workshops.get(0));
        areas.get(1).setWorkshop(workshops.get(0));

        areaRepository.saveAll(areas);
    }

    private List<Laboratory> createLaboratories() {
        return laboratoryRepository.saveAll(
                Arrays.asList(
                        new Laboratory()
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    private void setLaboratoryToWorkshop() {
        List<Workshop> workshops = workshopRepository.findAll();
        List<Laboratory> laboratories = laboratoryRepository.findAll();

        workshops.get(0).getLaboratoryList().add(laboratories.get(0));

        workshopRepository.saveAll(workshops);
    }

    private List<Equipment> createEquipmentForLabs() {
        return equipmentRepository.saveAll(
                Arrays.asList(
                        new Equipment()
                                .setEquipmentType(EquipmentType.TESTING_STAND)
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Equipment()
                                .setEquipmentType(EquipmentType.DEFECTIVE_CHECK)
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Equipment()
                                .setEquipmentType(EquipmentType.ASSEMBLY_DISASSEMBLY)
                                .setDefinition("Some definition")
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    private void setEquipmentToLaboratory() {
        List<Equipment> equipmentForLaboratories = equipmentRepository.findAll();
        List<Laboratory> laboratories = laboratoryRepository.findAll();

        equipmentForLaboratories.get(0).setLaboratory(laboratories.get(0));
        equipmentForLaboratories.get(1).setLaboratory(laboratories.get(0));
        equipmentForLaboratories.get(2).setLaboratory(laboratories.get(0));

        equipmentRepository.saveAll(equipmentForLaboratories);
    }

    private List<Product> createProducts() {
        return productRepository.saveAll(
                Arrays.asList(
                        new Product()
                                .setCategory(ProductCategory.AVTOBUS)
                                .setType(ProductType.SAMOSVAL)
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Product()
                                .setCategory(ProductCategory.GRUSOVIY)
                                .setType(ProductType.HACHBEK)
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now()),
                        new Product()
                                .setCategory(ProductCategory.LEHKOVIY)
                                .setType(ProductType.SEDAN)
                                .setDateCreated(LocalDateTime.now())
                                .setDateModified(LocalDateTime.now())
                )
        );
    }

    private void setProductToArea() {
        List<Area> areaList = areaRepository.findAll();
        List<Product> productList = productRepository.findAll();

        productList.get(0).setArea(areaList.get(0));
        productList.get(1).setArea(areaList.get(0));
        productList.get(2).setArea(areaList.get(0));

        productRepository.saveAll(productList);
    }

    private void setLaboratoryToProduct() {
        List<Laboratory> laboratoryList = laboratoryRepository.findAll();
        List<Product> productList = productRepository.findAll();

        productList.get(0).setLaboratory(laboratoryList.get(0));
        productList.get(1).setLaboratory(laboratoryList.get(0));
        productList.get(2).setLaboratory(laboratoryList.get(0));

        productRepository.saveAll(productList);
    }

}
