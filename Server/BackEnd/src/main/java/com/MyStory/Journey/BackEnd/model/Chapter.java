package com.mystory.journey.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "chapters")
public class Chapter {
    @Id
    private String id;
    private String title;
    private List<String> lessons;
    public Chapter() {
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public List<String> getLessons() {
        return lessons;
    }
    public void setLessons(List<String> lessons) {
        this.lessons = lessons;
    }
    
}
