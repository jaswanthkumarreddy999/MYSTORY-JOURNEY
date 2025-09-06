package com.mystory.journey.backend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mystory.journey.backend.model.Lesson;
@Repository
public interface LessonRepository extends MongoRepository<Lesson, String> {
    Lesson findBytitle(String title);
}
