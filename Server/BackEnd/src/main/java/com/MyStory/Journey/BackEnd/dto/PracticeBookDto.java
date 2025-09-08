package com.mystory.journey.backend.dto;

public class PracticeBookDto {
    private String id;
    private String subtitle;
    private String title;
    private int chapters;
    private int lessons;
    private int progress;
    public PracticeBookDto() {
    }
    public String getId() {
        return id;
    }
    public PracticeBookDto(String id, String subtitle, String title, int chapters, int lessons, int progress) {
        this.id = id;
        this.subtitle = subtitle;
        this.title = title;
        this.chapters = chapters;
        this.lessons = lessons;
        this.progress = progress;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getSubtitle() {
        return subtitle;
    }
    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public int getChapters() {
        return chapters;
    }
    public void setChapters(int chapters) {
        this.chapters = chapters;
    }
    public int getLessons() {
        return lessons;
    }
    public void setLessons(int lessons) {
        this.lessons = lessons;
    }
    public int getProgress() {
        return progress;
    }
    public void setProgress(int progress) {
        this.progress = progress;
    }
}
