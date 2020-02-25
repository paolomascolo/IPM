package it.contrader.service;

import org.springframework.stereotype.Service;

import it.contrader.dao.PacketRepository;
import it.contrader.dto.PacketDTO;
import it.contrader.model.Packet;

@Service
public class PacketService extends AbstractService<Packet, PacketDTO> {

	public PacketDTO findByName( String name ) {
		return converter.toDTO(((PacketRepository) repository).findByName(name));
	}

}
