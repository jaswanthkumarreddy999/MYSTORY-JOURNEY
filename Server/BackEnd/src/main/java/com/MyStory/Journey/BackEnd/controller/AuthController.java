package com.mystory.journey.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mystory.journey.backend.model.LoginRequest;
import com.mystory.journey.backend.model.RegisterRequest;
import com.mystory.journey.backend.model.User;
import com.mystory.journey.backend.repo.UserRepository;
import com.mystory.journey.backend.security.JwtUtil;
import com.mystory.journey.backend.service.AuthService;
import com.mystory.journey.backend.service.OtpService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private OtpService otpService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/send-otp")
    public ResponseEntity<Map<String, Object>> sendOtp(@RequestParam String email) {
        System.out.println(email);
        Map<String, Object> response = new HashMap<>();
        String otp = otpService.generateOtp(email);
        boolean isNew = authService.isNewUser(email);
        try {
            authService.sendOtp(email, otp);
        } catch (Exception e) {
            response.put("message", "Invalid email address or email not registered.");
            response.put("isNew", false);
            response.put("success", false);
            return ResponseEntity.badRequest().body(response);
        }
        response.put("message", "OTP sent successfully to your email.");
        response.put("isNew", isNew);
        response.put("success", true);
        System.out.println(response);
        return ResponseEntity.ok(response);
    }

    // step 2: verify otp and generate JWT
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        System.out.println(request);
        Map<String, Object> response = new HashMap<>();
        boolean otpValid = otpService.verifyOtp(request.getEmail(), request.getOtp());
        if (otpValid) {
            User user = userRepository.findByEmail(request.getEmail());
            if (user != null) {
                user.setVerified(true);
                userRepository.save(user);
            }
            String token = jwtUtil.generateToken(request.getEmail());
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("token", token);
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Invalid OTP");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        System.out.println(request.getPhone()+" "+request.getName()+" "+request.getEmail()+" "+request.getOtp());
        Map<String, Object> response = new HashMap<>();
        boolean otpValid = otpService.verifyOtp(request.getEmail(), request.getOtp());

        if (otpValid) {
            User user = new User(request.getName(), request.getEmail(),request.getPhone(),true);
            userRepository.save(user);
            String token = jwtUtil.generateToken(request.getEmail());
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("token", token);
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Invalid OTP");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

}
