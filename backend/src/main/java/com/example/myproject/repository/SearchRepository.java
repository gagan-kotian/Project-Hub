package com.example.myproject.repository;


import com.example.myproject.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);

}