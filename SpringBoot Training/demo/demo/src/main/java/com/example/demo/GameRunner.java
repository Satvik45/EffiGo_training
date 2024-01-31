package com.example.demo;

public class GameRunner {

	public GameRunner(MarioGame game) {
		// TODO Auto-generated constructor stub
 this.game = game;
	}
	
	public void run() {
		MarioGame game;
		game.up();
		game.down();
		game.left();
		game.right();
		
	}

}
