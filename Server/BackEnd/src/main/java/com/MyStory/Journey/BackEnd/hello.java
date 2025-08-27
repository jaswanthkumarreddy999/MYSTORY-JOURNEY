package com.mystory.journey.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class hello {
    @GetMapping("/home")
    public String greet() {
        return "Welcome to my website";
    }
}
