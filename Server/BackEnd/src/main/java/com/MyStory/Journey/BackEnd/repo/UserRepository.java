package com.mystory.journey.backend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mystory.journey.backend.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
