package com.mystory.journey.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "lessons")
public class Lesson {
    @Id
    private String id;
   
    private String title;
    private List<String> problems;

    public Lesson() {
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
    public List<String> getProblems() {
        return problems;
    }
    public void setProblems(List<String> problems) {
        this.problems = problems;
    }

}
