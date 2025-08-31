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

import com.mystory.journey.backend.model.RoadMap;
import com.mystory.journey.backend.service.RoadMapService;

@CrossOrigin(origins = "http://localhost:5173") // adjust as needed
@RestController
@RequestMapping("/roadmap")
public class RoadMapController {

    @Autowired
    private RoadMapService roadMapService;

    @GetMapping("/getroadmaps")
    public ResponseEntity<Map<String, Object>> getRoadmaps() {
        Map<String, Object> response = new HashMap<>();
        List<RoadMap> allRoadMaps = roadMapService.getRoadmaps();

        if (allRoadMaps.isEmpty()) {
            response.put("success", false);
            response.put("message", "No roadmaps found");
            response.put("data", null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        response.put("success", true);
        response.put("message", "Roadmaps fetched successfully");
        response.put("data", allRoadMaps);
        return ResponseEntity.ok(response);
    }
}
