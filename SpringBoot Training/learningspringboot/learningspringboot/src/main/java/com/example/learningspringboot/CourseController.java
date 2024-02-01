package com.example.learningspringboot;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

	@GetMapping("/courses")
	public List<Course> retriveAllCourses() {
		return Arrays.asList(new Course(1, "Learn AWS", "in28mins"), new Course(2, "Learn DevOps", "in28mins")

		);

	}

}
