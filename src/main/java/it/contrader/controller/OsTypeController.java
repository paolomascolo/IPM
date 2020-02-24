package it.contrader.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.contrader.dto.OsTypeDTO;
import it.contrader.service.OsTypeService;

@RestController
@RequestMapping("/ostype")
@CrossOrigin(origins = "http://localhost:4200")
public class OsTypeController extends AbstractController<OsTypeDTO> {
	
	@Autowired
	private OsTypeService osTypeService;

}
