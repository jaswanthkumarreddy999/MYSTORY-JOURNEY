package com.mystory.journey.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mystory.journey.backend.model.User;
import com.mystory.journey.backend.repo.UserRepository;
import com.mystory.journey.backend.security.JwtUtil;
import com.mystory.journey.backend.service.AuthService;
import com.mystory.journey.backend.service.OtpService;

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

    // step 1: send otp to email
    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam String email) {
        // 1. Generate OTP
        String otp = otpService.generateOtp(email);

        // 2. Send OTP via email
        try {
            authService.sendOtp(email, otp);
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to send OTP to " + email;
        }

        // 3. Return success message
        return "OTP sent to " + email;
    }

    // step 2: verify otp and generate JWT
    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestParam String email, @RequestParam String otp) {
        // check OTP in DB
        boolean otpValid = otpService.verifyOtp(email,otp);

        if (otpValid) {
            User user = userRepository.findByEmail(email);
            if (user != null) {
                user.setVerified(true);
                userRepository.save(user);
            }

            return "OTP verification successful!";
            // String token = jwtUtil.generateToken(email);
            // return "JWT Token: " + token;
        } else {
            return "Invalid OTP!";
        }
    }
}
