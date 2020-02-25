package it.contrader.service;

import org.springframework.stereotype.Service;

import it.contrader.dao.EnvironmentRepository;
import it.contrader.dto.EnvironmentDTO;
import it.contrader.model.Environment;

/**
 * Estende AbstractService con parametri {@link User} e {@link UserDTO}.
 * Implementa il metodo di login ed eredita quelli Abstract.
 * 
 * @see AbstractService
 * @see ServiceDTO
 */
@Service
public class EnvironmentService extends AbstractService<Environment, EnvironmentDTO> {

	// ALL crud methods in AbstractService

	// LOGIN method
	public EnvironmentDTO findByName(String name) {
		return converter.toDTO(((EnvironmentRepository) repository).findByName(name));
	}

}
