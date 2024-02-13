package com.example.LearningPortal.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LearningPortal.entity.Enrollment;
import com.example.LearningPortal.repo.EnrollmentRepository;

@Service
public class EnrollmentService {

	@Autowired
	private EnrollmentRepository enrollmentRepository;

	public Enrollment enrollment(Enrollment enrollment) {

		enrollment.setCreatedOn(LocalDateTime.now());
		enrollment.setUpdatedOn(LocalDateTime.now());
		return enrollmentRepository.save(enrollment);

	}

}
