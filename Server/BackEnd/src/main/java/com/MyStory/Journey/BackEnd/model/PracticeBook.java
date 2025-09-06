package com.mystory.journey.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "practicebooks")
public class PracticeBook {
    @Id
    private String id;
    private String title;
    private String subtitle;
    private String thumbnail;
    private List<String> chapters;
    public PracticeBook() {
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
    public String getSubtitle() {
        return subtitle;
    }
    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }
    public String getThumbnail() {
        return thumbnail;
    }
    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
    public List<String> getChapters() {
        return chapters;
    }
    public void setChapters(List<String> chapters) {
        this.chapters = chapters;
    }
}
