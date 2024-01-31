package com.example.project1;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.project1.game.ContraGame;
import com.example.project1.game.GameRunner;
import com.example.project1.game.GamingConsole;

@SpringBootApplication
public class Project1Application {

	public static void main(String[] args) {
		

		//  ContraGame game = new ContraGame();
		//  MarioGame game2 = new MarioGame();
		
		//  GamingConsole game = new ContraGame();
		//  GameRunner runner = new GameRunner(game);
		
		 //  GameRunner runner2 = new GameRunner(game2);
		
		 ConfigurableApplicationContext context =  SpringApplication.run(Project1Application.class, args);

		GameRunner runner =  context.getBean(GameRunner.class);
		runner.run();
	}

}
