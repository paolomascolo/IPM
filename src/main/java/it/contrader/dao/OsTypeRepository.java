package it.contrader.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.contrader.model.OsType;

@Repository
public interface OsTypeRepository extends CrudRepository<OsType, Long>{
	OsType findByOsTypeName (String name);
}
