package it.contrader.converter;

import org.springframework.stereotype.Component;

import it.contrader.dto.OsTypeDTO;
import it.contrader.model.OsType;

@Component
public class OsTypeConverter extends AbstractConverter<OsType, OsTypeDTO>{

	@Override
	public OsType toEntity(OsTypeDTO osTypeDto) {
		OsType osType = null;
		if (osTypeDto!=null) {
			osType = new OsType(osTypeDto.getId(), osTypeDto.getOsTypeName(), osTypeDto.getCommand());
		}
		return osType;
	}

	@Override
	public OsTypeDTO toDTO(OsType osType) {
		OsTypeDTO osTypeDTO = null;
		if (osType!=null) {
			osTypeDTO=new OsTypeDTO(osType.getId(), osType.getOsTypeName(), osType.getCommand());
		}
		return osTypeDTO;
	}

}
