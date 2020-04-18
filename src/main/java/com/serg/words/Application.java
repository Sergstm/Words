package com.serg.words;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.awt.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);

//        String url = "http://localhost:8080";
//        if (Desktop.isDesktopSupported()) {
//            Desktop desktop = Desktop.getDesktop();
//            try {
//                desktop.browse(new URI(url));
//            } catch (IOException | URISyntaxException e) {
//                e.printStackTrace();
//            }
//        } else {
//            Runtime runtime = Runtime.getRuntime();
//            try {
//                runtime.exec("xdg-open " + url);
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }

    }
}
