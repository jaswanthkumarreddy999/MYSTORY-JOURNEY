package com.mystory.journey.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mystory.journey.backend.model.PracticeBook;
import com.mystory.journey.backend.model.Problem;
import com.mystory.journey.backend.service.PracticeBooksService;

@CrossOrigin(origins = "http://localhost:5173") // adjust as needed
@RestController
@RequestMapping("/practicebooks")
public class PracticeBooksController {
    @Autowired
    private PracticeBooksService practiceBooksService;

    @GetMapping("/getpracticebooks")
    public ResponseEntity<Map<String, Object>> getPracticeBooks() {
        Map<String, Object> response = new HashMap<>();
        List<PracticeBook> allPracticeBooks = practiceBooksService.getPracticeBooks();

        if (allPracticeBooks.isEmpty()) {
            response.put("success", false);
            response.put("message", "No roadmaps found");
            response.put("data", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        for (PracticeBook book : allPracticeBooks) {
            long lessons = practiceBooksService.getTotalLessons(book);
            int progress = practiceBooksService.getProgress(book);
            book.setProgress(progress);
            book.setLessons(lessons);
        }

        response.put("success", true);
        response.put("message", "PracticeBooks fetched successfully");
        response.put("data", allPracticeBooks);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/getproblems")
    public ResponseEntity<Map<String, Object>> getProblems() {
        Map<String, Object> response = new HashMap<>();

        List<Problem> allProblems = practiceBooksService.getProblems(); // Inject ProblemRepository

        if (allProblems.isEmpty()) {
            response.put("success", false);
            response.put("message", "No problems found");
            response.put("data", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        response.put("success", true);
        response.put("message", "Problems fetched successfully");
        response.put("data", allProblems);

        return ResponseEntity.ok(response);
    }
    
}
