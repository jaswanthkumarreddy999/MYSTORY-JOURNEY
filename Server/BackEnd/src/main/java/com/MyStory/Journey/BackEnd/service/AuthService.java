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

    public String sendOtp(String email, String otp) {
        try {
            mailService.sendOtpEmail(email, otp);
            System.out.println("Email sent successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return otp;
    }

    public String verifyOtp(String email, String otp, String username) {
        if (otpService.verifyOtp(email, otp)) {
            User user = userRepository.findByEmail(email);
            if (user != null) {
                if (username != null && user.getUserName() == null) {
                    user.setUserName(username);
                }
                user.setVerified(true);
                userRepository.save(user);

                return jwtUtil.generateToken(email);
            }
        }
        return null;
    }

    public boolean isNewUser(String email) {
        User user = userRepository.findByEmail(email);
        return user == null;
    }
}
