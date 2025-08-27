package com.mystory.journey.backend.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OtpService {
    private final Map<String, String> otpCache = new HashMap<>();

    // generate & store OTP
    public String generateOtp(String email) {
        String otp = String.valueOf(new Random().nextInt(900000) + 100000); // 6 digit
        otpCache.put(email, otp);
        return otp;
    }

    // verify OTP
    public boolean verifyOtp(String email, String otp) {
        return otp.equals(otpCache.get(email));
    }
}
