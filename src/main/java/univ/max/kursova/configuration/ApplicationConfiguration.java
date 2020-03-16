package univ.max.kursova.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@EnableMongoRepositories(basePackages = "univ.max.kursova.repository")
public class ApplicationConfiguration {
}
