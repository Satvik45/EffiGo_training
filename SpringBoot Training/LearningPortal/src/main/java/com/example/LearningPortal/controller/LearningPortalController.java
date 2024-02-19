package com.example.LearningPortal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.LearningPortal.entity.Course;
import com.example.LearningPortal.service.CategoryService;
import com.example.LearningPortal.service.CourseService;
import com.example.LearningPortal.service.EnrollmentService;
import com.example.LearningPortal.service.FavoriteService;
import com.example.LearningPortal.service.UserService;

@RestController
@RequestMapping("/api")
public class LearningPortalController {

	private UserService userService;

	private CourseService courseService;

	private CategoryService categoryService;

	private EnrollmentService enrollmentService;

	public LearningPortalController(UserService userService, CourseService courseService,
			CategoryService categoryService, EnrollmentService enrollmentService, FavoriteService favoriteService) {
		super();
		this.userService = userService;
		this.courseService = courseService;
		this.categoryService = categoryService;
		this.enrollmentService = enrollmentService;
		this.favoriteService = favoriteService;
	}

	private FavoriteService favoriteService;

	@GetMapping("/courses")
	public ResponseEntity<List<Course>> getAllCourses() {
		List<Course> courses = courseService.getAllCourses();
		return new ResponseEntity<>(courses, HttpStatus.OK);
	}

	@GetMapping("/courses/{name}")
	public List<Course> getAllJavaCourses(@PathVariable String name) {
		return courseService.GetAllJavaCourses(name);
	}

	@GetMapping("/course/{id}")
	public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
		Optional<Course> course = Optional.ofNullable(courseService.getCourseById(id));
		return course.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
				.orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@PostMapping("/course/create")
	public ResponseEntity<Course> createCourse(@RequestBody Course course) {
		Course createdCourse = courseService.createCourse(course);
		return new ResponseEntity<>(createdCourse, HttpStatus.CREATED);
	}

	@PutMapping("/course/update/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course) {
		Optional<Course> existingCourse = Optional.ofNullable(courseService.getCourseById(id));
		if (existingCourse.isPresent()) {
			Course updatedCourse = courseService.updateCourse(id, course);
			return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
