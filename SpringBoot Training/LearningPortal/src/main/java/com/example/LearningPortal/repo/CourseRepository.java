package com.example.LearningPortal.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.LearningPortal.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

	@Query(value = "SELECT * from Course c WHERE c.title = ?1", nativeQuery = true)
	List<Course> findAllJavaCourses(String name);

}
