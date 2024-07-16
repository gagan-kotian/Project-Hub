package com.example.myproject.model;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="projects")
public class Post {
    private String name;
    private String title;
    private String desc;
    private String projectLink;
    private String feedback;

    public Post() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getProjectLink() {
        return projectLink;
    }

    public void setProjectLink(String projectLink) {
        this.projectLink = projectLink;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }


    @Override
    public String toString() {
        return "Post{" +
                "Name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                ",projectlink=" + projectLink +
                ", feedback=" + feedback +
                '}';
    }
}
