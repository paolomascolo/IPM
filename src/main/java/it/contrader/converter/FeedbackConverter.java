package it.contrader.converter;

import org.springframework.stereotype.Component;

import it.contrader.dto.FeedbackDTO;
import it.contrader.model.Feedback;

@Component
public class FeedbackConverter extends AbstractConverter<Feedback, FeedbackDTO>{

	@Override
	public Feedback toEntity(FeedbackDTO feedbackDTO) {
		Feedback feedback = null;
		if(feedbackDTO!=null) {
			feedback=new Feedback(feedbackDTO.getId(), feedbackDTO.getVote(), feedbackDTO.getTitle(), feedbackDTO.getFeedback());
		}
		return feedback;
	}

	@Override
	public FeedbackDTO toDTO(Feedback feedback) {
		FeedbackDTO feedbackDTO = null;
		if(feedback!=null) {
			feedbackDTO=new FeedbackDTO(feedback.getId(), feedback.getVote(), feedback.getTitle(), feedback.getFeedback());
		}
		return feedbackDTO;
	}

}
