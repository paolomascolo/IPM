package it.contrader.converter;

import org.springframework.stereotype.Component;

import it.contrader.dto.PacketDTO;

import it.contrader.model.Packet;

@Component
public class PacketConverter extends AbstractConverter<Packet, PacketDTO> {

	@Override
	public Packet toEntity(PacketDTO packetDTO) {
		Packet packet = null;
		if (packetDTO != null) {
			packet = new Packet(packetDTO.getId(), packetDTO.getName(), packetDTO.getDescription());			
		}
		return packet;
	}

	@Override
	public PacketDTO toDTO(Packet packet) {
		PacketDTO packetDTO = null;
		if (packet != null) {
			packetDTO = new PacketDTO (packet.getId(), packet.getName(), packet.getDescription() );
			
		}
		return packetDTO;
	}
}