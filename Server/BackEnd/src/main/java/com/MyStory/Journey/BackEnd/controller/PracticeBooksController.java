package com.mystory.journey.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mystory.journey.backend.dto.PracticeBookDto;
import com.mystory.journey.backend.model.Problem;
import com.mystory.journey.backend.service.PracticeBooksService;

@CrossOrigin(origins = "http://localhost:5173") // adjust as needed
@RestController
@RequestMapping("/practicebooks")
public class PracticeBooksController {
    @Autowired
    private PracticeBooksService practiceBooksService;

    @GetMapping("/getpracticebooks")
    public ResponseEntity<Map<String, Object>> getPracticeBooks(@RequestParam String userid) {
        Map<String, Object> response = new HashMap<>();
        List<PracticeBookDto> allPracticeBooks = practiceBooksService.getPracticeBooks(userid);
        if (allPracticeBooks == null) {
            response.put("success", false);
            response.put("message", "no books are found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        response.put("success", true);
        response.put("message", "books are found");
        response.put("data", allPracticeBooks);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);  
    }
    
    @GetMapping("/getproblems")
    public ResponseEntity<Map<String, Object>> getProblems() {
        Map<String, Object> response = new HashMap<>();
        List<Problem> allProblems = practiceBooksService.getProblems();
        if (allProblems == null) {
            response.put("success", false);
            response.put("message", "no problems are found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        response.put("success", true);
        response.put("message", "problems are found");
        response.put("data", allProblems);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);

    }
    
}
