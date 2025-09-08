package com.mystory.journey.backend.model;

import java.util.HashSet;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "problems")
public class Problem {
    @Id
    private String id;
    private String title;
    private String myResource;
    private String resource;
    private String PracticeLink;
    private String notes;
    private String difficulty;
    private HashSet<String> solvedby;
    private HashSet<String> markedby;
    public HashSet<String> getMarkedby() {
        return markedby;
    }
    public void setMarkedby(HashSet<String> markedby) {
        this.markedby = markedby;
    }
    public HashSet<String> getSolvedby() {
        return solvedby;
    }
    public void setSolvedby(HashSet<String> solvedby) {
        this.solvedby = solvedby;
    }
    public long getSubmissions() {
        return submissions;
    }
    public void setSubmissions(long submissions) {
        this.submissions = submissions;
    }
    private long submissions; 
    public Problem() {
    }
    private boolean revision;
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
    public String getMyResource() {
        return myResource;
    }
    public void setMyResource(String myResource) {
        this.myResource = myResource;
    }
    public String getResource() {
        return resource;
    }
    public void setResource(String resource) {
        this.resource = resource;
    }
    public String getPracticeLink() {
        return PracticeLink;
    }
    public void setPracticeLink(String practiceLink) {
        PracticeLink = practiceLink;
    }
    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }
    public boolean isRevision() {
        return revision;
    }
    public void setRevision(boolean revision) {
        this.revision = revision;
    }
    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}
