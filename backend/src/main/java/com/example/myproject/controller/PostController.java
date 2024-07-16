package com.example.myproject.controller;

import com.example.myproject.model.Feed;
import com.example.myproject.model.Post;
import com.example.myproject.repository.FeedRepository;
import com.example.myproject.repository.PostRepository;
import com.example.myproject.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    PostRepository postRepo;

    @Autowired
    SearchRepository srepo;

    @Autowired
    FeedRepository feedRepo;

    @GetMapping("/allPosts")
    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    @GetMapping("/posts/{text}")
    public List<Post> search(@PathVariable String text) {
        return srepo.findByText(text);
    }

    @PostMapping("/post")
    public Post addPost(@RequestBody Post post) {
        return postRepo.save(post);
    }

    @PostMapping("/feedbacks")
    public Feed addFeedback(@RequestBody Feed feedback) {
        return feedRepo.save(feedback);
    }

    @GetMapping("/feedbacks")
    public List<Feed> getAllFeedbacks() {
        return feedRepo.findAll();
    }
}
