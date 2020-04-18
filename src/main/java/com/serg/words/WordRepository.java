package com.serg.words;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface WordRepository extends CrudRepository<Word, Long> {
    Iterable<Word> findByDateTimeBefore(LocalDateTime time);
    Iterable<Word> findByRateBetween(int from, int to);
    Iterable<Word> findByRateGreaterThan(int rate);
    int countByEngName(String name);
    int countByRusName(String name);
}
