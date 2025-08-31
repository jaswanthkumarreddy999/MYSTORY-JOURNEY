package com.mystory.journey.backend.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystory.journey.backend.model.RoadMap;
import com.mystory.journey.backend.repo.RoadMapRepository;

@Service
public class RoadMapService {

    @Autowired
    private RoadMapRepository roadMapRepository;

    // Fetch all roadmaps
    public List<RoadMap> getRoadmaps() {
        return roadMapRepository.findAll();
    }

    // Save a roadmap
    public RoadMap saveRoadmap(RoadMap roadmap) {
        return roadMapRepository.save(roadmap);
    }

    // Get roadmap by ID
    public RoadMap getRoadmapById(String id) {
        return roadMapRepository.findById(id).orElse(null);
    }

    // Delete roadmap by ID
    public void deleteRoadmap(String id) {
        roadMapRepository.deleteById(id);
    }

    public void addView(String userid, String roadmapid) {
        RoadMap roadMap = roadMapRepository.findById(roadmapid).orElse(null);
        if (roadMap != null) {
            roadMap.setViews(roadMap.getViews() + 1);
            if (!roadMap.getViewedBy().contains(userid)) {
                Set<String> viewers = roadMap.getViewedBy();
                viewers.add(userid);
                roadMap.setViewedBy(viewers);
            }
            roadMapRepository.save(roadMap);
        }
            
    }
}
