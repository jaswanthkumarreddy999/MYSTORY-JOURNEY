package com.mystory.journey.backend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mystory.journey.backend.model.PracticeBook;

public interface PracticeBookRepository extends MongoRepository<PracticeBook, String> {

    PracticeBook findBytitle(String title);
}
