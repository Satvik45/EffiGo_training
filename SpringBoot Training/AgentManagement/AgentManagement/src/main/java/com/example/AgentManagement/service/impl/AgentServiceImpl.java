package com.example.AgentManagement.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.AgentManagement.entity.AgentEntity;
import com.example.AgentManagement.repository.AgentRepository;
import com.example.AgentManagement.service.AgentService;

@Service
public class AgentServiceImpl implements AgentService {

	private final AgentRepository agentRepository;

	public AgentServiceImpl(AgentRepository agentRepository) {
		this.agentRepository = agentRepository;
	}

	@Override
	public List<AgentEntity> findAllAgent() {
		// TODO Auto-generated method stub
		return agentRepository.findAll();
	}

	@Override
	public Optional<AgentEntity> findById(Long id) {
		// TODO Auto-generated method stub
		return agentRepository.findById(id);
	}

	@Override
	public AgentEntity saveAgent(AgentEntity agentEntity) {
		// TODO Auto-generated method stub
		return agentRepository.save(agentEntity);
	}

	@Override
	public AgentEntity updateAgent(AgentEntity agentEntity) {
		// TODO Auto-generated method stub
		return agentRepository.save(agentEntity);
	}

	@Override
	public void deleteAgent(Long id) {
		// TODO Auto-generated method stub
		agentRepository.deleteById(id);
	}

}