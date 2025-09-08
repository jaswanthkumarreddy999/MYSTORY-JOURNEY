package com.mystory.journey.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystory.journey.backend.dto.PracticeBookDto;
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

    public List<PracticeBookDto> getPracticeBooks(String userid) {
        List<PracticeBook> allpracticeBooks = practiceBookRepository.findAll();
        List<PracticeBookDto> practiceBook = new ArrayList<>();

        for (PracticeBook book : allpracticeBooks) {
            int lessons = getTotalLessons(book); // ✅ call directly
            int progress = getProgress(book, userid); // ✅ call directly

            PracticeBookDto newbook = new PracticeBookDto(
                    book.getId(),
                    book.getSubtitle(),
                    book.getTitle(),
                    book.getChapters().size(),
                    lessons,
                    progress);
            practiceBook.add(newbook);
        }
        return practiceBook;
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

    public int getProgress(PracticeBook book, String userid) {
        int solvedCount = 0;
        int total = 0;
        for (String chapterId : book.getChapters()) {
            Chapter chapter = chapterRepository.findById(chapterId).orElse(null);
            if (chapter != null) {
                for (String lessonId : chapter.getLessons()) {
                    Lesson lesson = lessonRepository.findById(lessonId).orElse(null);
                    if (lesson != null) {
                        for (String problemId : lesson.getProblems()) {
                            Problem problem = problemRepository.findById(problemId).orElse(null);
                            if (problem != null) {
                                if (problem.getSolvedby() != null && problem.getSolvedby().contains(userid))
                                    solvedCount++;
                                total++;
                            }
                        }
                    }
                }
            }
        }
        return total == 0 ? 0 : (solvedCount * 100 / total); // ✅ fixed division
    }

    public List<Problem> getProblems() {
        return problemRepository.findAll();
    }
}
