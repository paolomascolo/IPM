package it.contrader.dao;

import javax.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import it.contrader.model.Environment;

// Permette di indicare che la classe che viene creata è in realtà un DAO (che in Spring viene, appunto, chiamata Repository)
@Repository
	
public interface EnvironmentRepository extends CrudRepository<Environment, Long>{

		Environment findByName (String name);	
}