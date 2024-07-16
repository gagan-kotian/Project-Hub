package com.example.myproject.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "feedback")
public class Feed {
    private String projectId;
    private String feedbackId;
    private String name;
    private String feedback;
    private int mark;

    public Feed() {
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(String feedbackId) {
        this.feedbackId = feedbackId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }

    @Override
    public String toString() {
        return "Feed{" +
                "projectId='" + projectId + '\'' +
                ", feedbackId='" + feedbackId + '\'' +
                ", name='" + name + '\'' +
                ", feedback='" + feedback + '\'' +
                ", mark=" + mark +
                '}';
    }
}
