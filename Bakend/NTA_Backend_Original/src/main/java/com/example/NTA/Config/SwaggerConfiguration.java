package com.example.NTA.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    @Bean
    public Docket Api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(
                        new ApiInfoBuilder()
                                .description("Gestion des Objets perdu et trouvés Api documentation")
                                .title("Gestion des Objets Perdu et Trouvés Rest Api")
                                .build()
                )
                .groupName("Rest APi V1")
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.example.NTA"))
                .paths(PathSelectors.any())
                .build();
    }
}
