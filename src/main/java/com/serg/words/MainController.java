package com.serg.words;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class MainController {

    private final WordService wordService;

    public MainController(WordService wordService) {
        this.wordService = wordService;
    }

    @PostMapping("/add")
    public String addWord(@RequestBody Word word) {
        return wordService.addWord(word);
    }

    @GetMapping("/get")
    public Word getWord() {
        return wordService.getWord();
    }

    @PutMapping("/update")
    public void updateWord(@RequestBody Word word) {
        wordService.updateWord(word, 5, 9);
    }

    @PutMapping("/rate/{id}")
    public void resetRate(@PathVariable long id) {
        wordService.resetRate(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delWord(@PathVariable long id) {
        wordService.delWord(id);
    }

    @GetMapping("/all")
    public Iterable<Word> getAllWords() {
        return wordService.getAllWords();
    }

    @GetMapping("/daily")
    public Iterable<Word> getDailyWord() {
        return wordService.getDailyWords();
    }

    @GetMapping("/weekly")
    public Iterable<Word> getWeeklyWord() {
        return wordService.getWeeklyWords(5, 9);
    }

    @GetMapping("/monthly")
    public Iterable<Word> getMonthlyWord() {
        return wordService.getMonthlyWords(9);
    }

}
