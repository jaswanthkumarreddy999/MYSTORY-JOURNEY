package com.mystory.journey.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystory.journey.backend.model.User;
import com.mystory.journey.backend.repo.UserRepository;
import com.mystory.journey.backend.security.JwtUtil;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final OtpService otpService;
    private final JwtUtil jwtUtil;
    @Autowired
    private MailService mailService;

    public AuthService(UserRepository userRepository, OtpService otpService, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.otpService = otpService;
        this.jwtUtil = jwtUtil;
    }

    // step 1: request OTP (login or signup)
    public String sendOtp(String email, String otp) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            // new user -> create placeholder (username will come later)
            user = new User();
            user.setEmail(email);
            user.setVerified(false);
            userRepository.save(user);
        }

        // Do NOT generate OTP again; use the one passed in
        // otp = otpService.generateOtp(email); // REMOVE this line

        // Call MailService to actually send the OTP email
        try {
            mailService.sendOtpEmail(email, otp); // make sure mailService is @Autowired
            System.out.println("Email sent successfully"); // debug
        } catch (Exception e) {
            e.printStackTrace();
        }

        return otp; // only for debug; remove in production
    }

    // step 2: verify OTP and login
    public String verifyOtp(String email, String otp, String username) {
        if (otpService.verifyOtp(email, otp)) {
            User user = userRepository.findByEmail(email);
            if (user != null) {
                if (username != null && user.getUserName() == null) {
                    user.setUserName(username);
                }
                user.setVerified(true);
                userRepository.save(user);

                // ✅ Generate JWT token valid 30 days
                return jwtUtil.generateToken(email);
            }
        }
        return null;
    }
}
