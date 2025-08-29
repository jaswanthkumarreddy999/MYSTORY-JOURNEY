package com.mystory.journey.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mystory.journey.backend.model.User;
import com.mystory.journey.backend.service.UserService;

@CrossOrigin(origins = "http://localhost:5173") // optional if using global config
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getProfile(@RequestParam String email) {
        Map<String, Object> response = new HashMap<>();
        User user = userService.getUser(email);

        if (user == null) {
            response.put("success", false);
            response.put("message", "User not found");
            response.put("data", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        response.put("success", true);
        response.put("message", "User found successfully");
        response.put("user", user);
        return ResponseEntity.ok(response); // 200 OK
    }
}
