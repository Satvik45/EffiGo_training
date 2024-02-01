package com.example.AgentManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.AgentManagement.entity.AgentEntity;

@Repository
public interface AgentRepository extends JpaRepository<AgentEntity, Long> {

}