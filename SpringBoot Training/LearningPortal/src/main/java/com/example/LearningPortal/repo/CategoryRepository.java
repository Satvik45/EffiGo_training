package com.example.LearningPortal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.LearningPortal.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
