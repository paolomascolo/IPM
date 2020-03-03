import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/service/feedbackservice';
import { FeedbackDTO } from 'src/dto/feedbackdto';
import { SearchService } from 'src/app/service/search.service';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';


export interface Post {
  title: string
  feedback: string
  vote: number
  id?: number
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent extends AbstractCrudComponent <FeedbackDTO> implements OnInit {

  posts : Array<Post> = new Array<Post>();

  constructor(service: FeedbackService, filter: SearchService) {
    super(service);
  }

  ngOnInit() {
  }

  updatePosts(post:Post){
    this.posts.push(post);
  }

}
