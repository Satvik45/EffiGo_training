package com.example.JDBC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.JDBC.model.Alien;
import com.example.JDBC.repo.AlienRepo;

@SpringBootApplication
public class JdbcApplication {

	public static void main(String[] args) {
	ApplicationContext context = SpringApplication.run(JdbcApplication.class, args);
	
	Alien alien1 = context.getBean(Alien.class);
	alien1.setId(111);
	alien1.setName("Satvik");
	alien1.setTech("Java");
	
	AlienRepo repo = context.getBean(AlienRepo.class);
	repo.save(alien1);
	
	System.out.println(repo.findAll());
	
	
		
	}

}
