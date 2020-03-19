package univ.max.kursova.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import univ.max.kursova.model.enums.PersonalType;

import java.time.LocalDateTime;
import java.util.Objects;

@Document
public class TechnicalPersonal {
    @Id
    private Long idTechPersonal;

    private String personalName;
    private PersonalType personalType;

    private LocalDateTime dateCreated;
    private LocalDateTime dateModified;
    private String description;

    public TechnicalPersonal() {
    }

    public TechnicalPersonal(Long id_tech_personal, String personalName, PersonalType personalType,
                             LocalDateTime dateCreated, LocalDateTime dateModified, String description) {
        this.idTechPersonal = id_tech_personal;
        this.personalName = personalName;
        this.personalType = personalType;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
        this.description = description;
    }

    public Long getIdTechPersonal() {
        return idTechPersonal;
    }

    public void setIdTechPersonal(Long idTechPersonal) {
        this.idTechPersonal = idTechPersonal;
    }

    public String getPersonalName() {
        return personalName;
    }

    public void setPersonalName(String personalName) {
        this.personalName = personalName;
    }

    public PersonalType getPersonalType() {
        return personalType;
    }

    public void setPersonalType(PersonalType personalType) {
        this.personalType = personalType;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public void setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TechnicalPersonal that = (TechnicalPersonal) o;
        return getIdTechPersonal() == that.getIdTechPersonal();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdTechPersonal());
    }
}
