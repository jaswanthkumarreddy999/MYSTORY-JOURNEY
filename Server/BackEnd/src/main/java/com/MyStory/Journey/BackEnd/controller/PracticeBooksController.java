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

        Map<String, Integer> lessonsMap = new HashMap<>();
        Map<String, Integer> progressMap = new HashMap<>();

        for (PracticeBook book : allPracticeBooks) {
            int totalLessons = practiceBooksService.getTotalLessons(book);
            int progress = practiceBooksService.getProgress(book);

            lessonsMap.put(book.getId(), totalLessons);
            progressMap.put(book.getId(), progress);
        }

        response.put("success", true);
        response.put("message", "Roadmaps fetched successfully");
        response.put("data", allPracticeBooks);
        response.put("totalLessons", lessonsMap);
        response.put("progress", progressMap);
        response.put("gradient", "from-purple-600 via-purple-700 to-indigo-800");
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
