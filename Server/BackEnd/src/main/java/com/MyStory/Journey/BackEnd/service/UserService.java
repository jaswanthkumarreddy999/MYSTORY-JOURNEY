package com.mystory.journey.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystory.journey.backend.model.User;
import com.mystory.journey.backend.repo.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser(String email) {
        User user = userRepository.findByEmail(email);
        return user;
    }

}
