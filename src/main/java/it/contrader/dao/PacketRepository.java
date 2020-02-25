package it.contrader.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.contrader.model.Packet;

@Repository
public interface PacketRepository extends CrudRepository<Packet, Long>{

	
	Packet findByName(String name);
	
}
