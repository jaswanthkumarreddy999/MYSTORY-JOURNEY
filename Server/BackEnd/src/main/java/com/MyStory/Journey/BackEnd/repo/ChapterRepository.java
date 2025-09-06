package com.mystory.journey.backend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mystory.journey.backend.model.Chapter;

@Repository
public interface ChapterRepository extends MongoRepository<Chapter,String>
{

    Chapter findBytitle(String title);
}
