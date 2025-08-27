package com.mystory.journey.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * User entity stored in MongoDB.
 * Each verified email will be saved here.
 */
@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String userName;
    private String email;
    private boolean verified;


    public User(String id, String userName, String email, boolean verified) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.verified = verified;
    }

    public User() {
    }

    // --- Getters & Setters ---
    public String getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }
}
