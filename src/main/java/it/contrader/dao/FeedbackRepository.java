package it.contrader.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.contrader.model.Feedback;

@Repository
public interface FeedbackRepository extends CrudRepository<Feedback, Long>{
 Feedback findById(long id);
}
