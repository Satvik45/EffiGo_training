package com.example.project1;

import org.springframework.stereotype.Component;

import com.example.project1.game.GamingConsole;

@Component

public class MarioGame implements GamingConsole{

    public void up(){
        System.out.println("up");
    }

    public void down(){
        System.out.println("down");
    }

    public void left(){
        System.out.println("left");
    }

    public void right(){
        System.out.println("right");
    }
} 
