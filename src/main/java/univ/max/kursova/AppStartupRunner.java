package univ.max.kursova;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import univ.max.kursova.service.impl.DataServiceImpl;

@Component
public class AppStartupRunner implements ApplicationRunner {

    @Autowired
    private DataServiceImpl dataService;

    @Override
    public void run(ApplicationArguments args) {

        dataService.createTechnicalPersonals();       //      TechnicalPersonal

        dataService.createWorkers();                  //      Worker

        dataService.createBrigades();                 //      Brigade
        dataService.setBrigadeToWorkers();            //      Brigade - Worker

        dataService.createTeamsOfAreaBosses();        //      TeamOfAreaBoss
        dataService.setTechPersonalToTeamOfAreaBoss(); //     TechnicalPersonal - TeamOfAreaBoss

        dataService.createAreas();                    //      Area
        dataService.setTeamOfAreaBossToArea();        //      Area - TeamOfAreaBoss
        dataService.setBrigadeToArea();               //      Area - Brigade

        dataService.createWorkshops();                //      Workshop
        dataService.setWorkshopToArea();              //      Workshop - Area

        dataService.createLaboratories();             //      Laboratory
        dataService.setLaboratoryToWorkshop();        //      Laboratory - Workshop

        dataService.createEquipmentForLabs();           //      Equipment
        dataService.setEquipmentToLaboratory();         //      Equipment - Laboratory

        dataService.createProducts();
        dataService.setProductToArea();
        dataService.setLaboratoryToProduct();
    }
}
