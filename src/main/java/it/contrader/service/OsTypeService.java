package it.contrader.service;

import org.springframework.stereotype.Service;

import it.contrader.dao.OsTypeRepository;
import it.contrader.dto.OsTypeDTO;
import it.contrader.model.OsType;

@Service
public class OsTypeService extends AbstractService<OsType, OsTypeDTO>{

	public OsTypeDTO findByOsTypeNameDto (String name) {
		return converter.toDTO(((OsTypeRepository)repository).findByOsTypeName(name));
	}
	
}
