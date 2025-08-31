package com.mystory.journey.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "roadmaps") // MongoDB collection name
public class RoadMap  {

    @Id
    private String id;

    private String title;
    private String description;
    private String image;
    private int rating;
    private String views;
    private String modalImage;
    private List<Faq> faqs;

    public static class Faq {
        private String q;
        private String a;

        public Faq() {
        }

        public Faq(String q, String a) {
            this.q = q;
            this.a = a;
        }

        public String getQ() {
            return q;
        }

        public void setQ(String q) {
            this.q = q;
        }

        public String getA() {
            return a;
        }

        public void setA(String a) {
            this.a = a;
        }
    }

    // ✅ Constructors
    public RoadMap() {
    }

    public RoadMap(String title, String description, String image, int rating,
            String views, String modalImage, List<Faq> faqs) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.views = views;
        this.modalImage = modalImage;
        this.faqs = faqs;
    }

    // ✅ Getters & Setters
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getViews() {
        return views;
    }

    public void setViews(String views) {
        this.views = views;
    }

    public String getModalImage() {
        return modalImage;
    }

    public void setModalImage(String modalImage) {
        this.modalImage = modalImage;
    }

    public List<Faq> getFaqs() {
        return faqs;
    }

    public void setFaqs(List<Faq> faqs) {
        this.faqs = faqs;
    }
}
