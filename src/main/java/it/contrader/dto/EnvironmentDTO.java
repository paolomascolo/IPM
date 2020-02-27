package it.contrader.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import it.contrader.model.Packet;
import it.contrader.model.User.Usertype;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import it.contrader.model.Packet;

// Permette la creazione automatica dei principali metodi di un Model (o di un DTO)
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")


public class EnvironmentDTO {
	
	private Long id;
	private String name;
	private String description;	
	private Packet environmentpacket;
	// private Category category;
}