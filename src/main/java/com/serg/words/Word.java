package com.serg.words;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "words")
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String engName;
    private String rusName;
    private LocalDateTime dateTime;
    private int rate;

    public Word() {
    }

    public Word(String engName, String rusName, LocalDateTime dateTime, int rate) {
        this.engName = engName;
        this.rusName = rusName;
        this.dateTime = dateTime;
        this.rate = rate;
    }

    public long getId() {
        return id;
    }

    public String getEngName() {
        return engName;
    }

    public String getRusName() {
        return rusName;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    @Override
    public String toString() {
        return "Word{" +
                "id=" + id +
                ", engName='" + engName + '\'' +
                ", rusName='" + rusName + '\'' +
                ", dateTime=" + dateTime +
                ", rate=" + rate +
                '}';
    }
}
