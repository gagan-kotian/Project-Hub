package com.example.myproject.repository;

import com.example.myproject.model.Feed;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedRepository extends MongoRepository<Feed, String> {
}
