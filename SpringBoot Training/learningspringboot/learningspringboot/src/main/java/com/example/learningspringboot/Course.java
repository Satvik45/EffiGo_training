package com.example.learningspringboot;

public class Course {

	private long id;
	private String name;
	private String authorString;

	public Course(long id, String name, String authorString) {
		super();
		this.id = id;
		this.name = name;
		this.authorString = authorString;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getAuthorString() {
		return authorString;
	}

	@Override
	public String toString() {
		return "Course [id=" + id + ", name=" + name + ", authorString=" + authorString + "]";
	}

}
