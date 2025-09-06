package com.mystory.journey.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystory.journey.backend.model.Chapter;
import com.mystory.journey.backend.model.Lesson;
import com.mystory.journey.backend.model.PracticeBook;
import com.mystory.journey.backend.model.Problem;
import com.mystory.journey.backend.repo.ChapterRepository;
import com.mystory.journey.backend.repo.LessonRepository;
import com.mystory.journey.backend.repo.PracticeBookRepository;
import com.mystory.journey.backend.repo.ProblemRepository;

@Service
public class PracticeBooksService {
    @Autowired
    private PracticeBookRepository practiceBookRepository;

    @Autowired
    private ChapterRepository chapterRepository;

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private ProblemRepository problemRepository;

    public List<PracticeBook> getPracticeBooks() {
        return practiceBookRepository.findAll();
    }

    public int getTotalLessons(PracticeBook book) {
        int totalLessons = 0;
        for (String chapterId : book.getChapters()) {
            Chapter chapter = chapterRepository.findById(chapterId).orElse(null);
            if (chapter != null) {
                totalLessons += chapter.getLessons().size();
            }
        }
        return totalLessons;
    }

    public int getProgress(PracticeBook book) {
        int solvedCount = 0;
        for (String chapterId : book.getChapters()) {
            Chapter chapter = chapterRepository.findById(chapterId).orElse(null);
            if (chapter != null) {
                for (String lessonId : chapter.getLessons()) {
                    Lesson lesson = lessonRepository.findById(lessonId).orElse(null);
                    if (lesson != null) {
                        for (String problemId : lesson.getProblems()) {
                            Problem problem = problemRepository.findById(problemId).orElse(null);
                            if (problem != null && problem.isStatus()) {
                                solvedCount++;
                            }
                        }
                    }
                }
            }
        }
        return solvedCount;
    }
    
    public List<Problem> getProblems() {
        return problemRepository.findAll();
    }
}
