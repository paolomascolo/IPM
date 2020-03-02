package it.contrader.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.contrader.dto.FeedbackDTO;
import it.contrader.service.FeedbackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:4200")
public class FeedbackController extends AbstractController<FeedbackDTO>{

	@Autowired
	private FeedbackService feedbackService;
	
}
