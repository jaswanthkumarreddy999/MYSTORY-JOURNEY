package com.mystory.journey.backend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mystory.journey.backend.model.RoadMap;
@Repository
public interface RoadMapRepository extends MongoRepository<RoadMap, String> {
    RoadMap findBytitle(String title);
}
