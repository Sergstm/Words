package com.serg.words;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class WordService {

    private final WordRepository wordRepository;

    public WordService(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    private List<Long> getIdByStatus() {
        Iterable<Word> words = wordRepository
                .findByDateTimeBefore(LocalDateTime.now());
        List<Long> list = new ArrayList<>();
        words.forEach(word -> list.add(word.getId()));
        return list;
    }

    public String addWord(Word word) {
        Word nWord = new Word(word.getEngName(), word.getRusName(),
                LocalDateTime.now(), 0);
        int numEng = wordRepository.countByEngName(word.getEngName());
        int numRus = wordRepository.countByRusName(word.getEngName());
        if (numEng == 0 && numRus == 0) {
            wordRepository.save(nWord);
            return "Saved";
        } else return "Word is exist";
    }

    public Word getWord() {
        List<Long> ids = getIdByStatus();
        int size = ids.size();
        if (size != 0) {
            int ints = new Random()
                    .ints(1, 0, size)
                    .limit(1).findFirst().getAsInt();
            Long aLong = ids.get(ints);
            return wordRepository.findById(aLong).orElse(new Word());
        } else return new Word();
    }

    public void updateWord(Word word, int from, int to) {
        int rate = word.getRate();
        if (rate >= from && rate <= to) word.setDateTime(LocalDateTime.now().plusWeeks(1));
        else if (rate > to) word.setDateTime(LocalDateTime.now().plusMonths(1));
        else word.setDateTime(LocalDateTime.now().plusMinutes(1));
        wordRepository.save(word);
    }

    public void resetRate(long id) {
        Word word = wordRepository.findById(id).orElse(new Word());
        word.setRate(0);
        word.setDateTime(LocalDateTime.now());
        wordRepository.save(word);
    }

    public void delWord(long id) {
        wordRepository.deleteById(id);
    }

    public Iterable<Word> getAllWords() {
        return wordRepository.findAll();
    }

    public Iterable<Word> getDailyWords() {
        return wordRepository.findByDateTimeBefore(LocalDateTime.now());
    }

    public Iterable<Word> getWeeklyWords(int from, int to) {
        return wordRepository.findByRateBetween(from, to);
    }

    public Iterable<Word> getMonthlyWords(int rate) {
        return wordRepository.findByRateGreaterThan(rate);
    }

}
