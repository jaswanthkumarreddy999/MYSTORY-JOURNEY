package com.mystory.journey.backend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mystory.journey.backend.model.Problem;
@Repository
public interface ProblemRepository extends MongoRepository<Problem, String>{
    Problem findBytitle(String title);
}
