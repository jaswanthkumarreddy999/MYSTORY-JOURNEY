package com.mystory.journey.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class Home {
    @GetMapping("/home")
    public String greet() {
        return "welcome to my website";
    }
    
}
