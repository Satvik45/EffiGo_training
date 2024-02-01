package com.example.AgentManagement.service;

import java.util.List;
import java.util.Optional;

import com.example.AgentManagement.entity.AgentEntity;

public interface AgentService {

	List<AgentEntity> findAllAgent();

	Optional<AgentEntity> findById(Long id);

	AgentEntity saveAgent(AgentEntity agentEntity);

	AgentEntity updateAgent(AgentEntity agentEntity);

	void deleteAgent(Long id);

}
