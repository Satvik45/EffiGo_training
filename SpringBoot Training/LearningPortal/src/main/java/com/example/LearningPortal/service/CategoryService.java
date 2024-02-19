package com.example.LearningPortal.service;

import org.springframework.stereotype.Service;

import com.example.LearningPortal.entity.Category;
import com.example.LearningPortal.repo.CategoryRepository;

@Service
public class CategoryService {

	public CategoryService(CategoryRepository categoryRepository) {
		super();
		this.categoryRepository = categoryRepository;
	}

	private CategoryRepository categoryRepository;

	public Category saveCategory(Category category) {
		return categoryRepository.save(category);
	}

	public Category getCategoryById(long categoryId) {
		return categoryRepository.findById(categoryId).orElse(null);
	}

}
