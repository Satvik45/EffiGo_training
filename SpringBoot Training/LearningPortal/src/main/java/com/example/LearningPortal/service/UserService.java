package com.example.LearningPortal.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.example.LearningPortal.entity.User;
import com.example.LearningPortal.repo.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public User saveUser(User user) {
		user.setCreatedOn(LocalDateTime.now());
		user.setUpdatedOn(LocalDateTime.now());
		return userRepository.save(user);
	}

	public User getUserById(long userId) {
		return userRepository.findById(userId).orElse(null);
	}

}
