package com.example.project1.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.project1.MarioGame;

@Component

public class GameRunner {

    @Autowired
    private GamingConsole game;

    public GameRunner(GamingConsole game) {
        //TODO Auto-generated constructor stub
        this.game= game;
    }

    public void run() {
        // TODO Auto-generated method stub
       // throw new UnsupportedOperationException("Unimplemented method 'run'");
        

        game.up();
        game.down();
        game.left();
        game.right();

    
    }

}
