package it.contrader.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import it.contrader.dto.EnvironmentDTO;
import it.contrader.service.EnvironmentService;


/**
 * 
 * Questa classe estende AbstractController con tipo {@link UserDTO}.
 * In aggiunta ai metodi di CRUD si implementa il metodo di  login.

 * @param<EnvironmentDTO>
 * 
 * @see AbstractController
 *
 */
@RestController
@RequestMapping("/environment")
@CrossOrigin(origins = "http://localhost:4200")
public class EnvironmentController extends AbstractController<EnvironmentDTO>{
	
	@Autowired
	private EnvironmentService environmentService;
	
}