package it.contrader.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import it.contrader.dto.PacketDTO;
import it.contrader.service.PacketService;

@RestController
@RequestMapping("/packet")
@CrossOrigin(origins = "http://localhost:4200")
public class PacketController extends AbstractController<PacketDTO>{
	
	@Autowired
	private PacketService packetService;

}