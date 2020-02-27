import { Inject, Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { FeedbackDTO } from 'src/dto/feedbackdto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends AbstractService<FeedbackDTO>{

  feedbacks: FeedbackDTO[];

  constructor(http: HttpClient){
    super(http);
    this.type='feedback';
  }
}
