package com.example.LearningPortal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.example.LearningPortal.controller", "com.example.LearningPortal.service",
		"com.example.LearningPortal.security" })
@EnableJpaRepositories(basePackages = { "com.example.LearningPortal.repo" })
public class LearningPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningPortalApplication.class, args);
	}

}
