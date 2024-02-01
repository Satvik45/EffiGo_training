package com.example.AgentManagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.AgentManagement.entity.AgentEntity;
import com.example.AgentManagement.service.AgentService;

@RestController
@RequestMapping("/agent")
public class AgentController {

	private final AgentService agentService;

	public AgentController(AgentService agentService) {
		this.agentService = agentService;
	}

	@GetMapping
	public List<AgentEntity> findAllAgent() {
		return agentService.findAllAgent();
	}

	@GetMapping("/id")
	public Optional<AgentEntity> findAgentById(@PathVariable("id") Long id) {
		return agentService.findById(id);
	}

	@PostMapping
	public AgentEntity saveAgent(@RequestBody AgentEntity agentEntity) {
		return agentService.saveAgent(agentEntity);

	}

	@PutMapping
	public AgentEntity updateAgent(@RequestBody AgentEntity agentEntity) {
		return agentService.updateAgent(agentEntity);
	}

	public void deleteAgent(@PathVariable("id") Long id) {
		agentService.deleteAgent(id);
	}
}
