import { Component, OnInit } from '@angular/core';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { FeedbackService } from 'src/service/feedbackservice';
import { SearchService } from 'src/app/service/search.service';
import { FeedbackDTO } from 'src/dto/feedbackdto';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent extends AbstractCrudComponent <FeedbackDTO> implements OnInit {

  constructor(service: FeedbackService, filter: SearchService) {
    super(service);
  }

  ngOnInit() {
  }

}
