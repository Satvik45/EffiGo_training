package com.example.LearningPortal.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.example.LearningPortal.entity.Favorite;
import com.example.LearningPortal.repo.FavoriteRepository;

@Service
public class FavoriteService {

	private FavoriteRepository favoriteRepository;

	FavoriteService(FavoriteRepository favoriteRepository) {
		this.favoriteRepository = favoriteRepository;
	}

	public Favorite favourite(Favorite favourite) {
		favourite.setCreatedOn(LocalDateTime.now());
		favourite.setUpdatedOn(LocalDateTime.now());
		return favoriteRepository.save(favourite);

	}

}
