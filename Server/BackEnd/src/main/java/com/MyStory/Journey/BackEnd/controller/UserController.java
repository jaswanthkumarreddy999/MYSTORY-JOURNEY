package com.mystory.journey.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mystory.journey.backend.model.User;
import com.mystory.journey.backend.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/profile")
    public ResponseEntity<?> getProile(@RequestParam String email) {
        System.out.println("hijjj");
        Map<String, Object> response = new HashMap<>();
        User user = userService.getUser(email);
        if (user == null) {
            response.put("message", "User not Found");
            response.put("success", false);
            return ResponseEntity.badRequest().body(response);
        }
        response.put("id", user.getId());
        response.put("userName", user.getUserName());
        response.put("email", user.getEmail());
        response.put("verified", user.isVerified());
        response.put("phoneNumber", user.getPhoneNumber());
        return ResponseEntity.ok(response);
    }
    
}
