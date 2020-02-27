import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../feedback.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter <Post> = new EventEmitter ()

  title = ''
  feedback= ''
  vote : number;

  constructor() { }

  ngOnInit() {
  }

  setVote(e:any){
    this.vote = e.target.value;
    this.vote = this.vote < 1 ? 1 : this.vote;
    this.vote = this.vote > 5 ? 5 : this.vote;
    console.log(e, this.vote);
  }

  addPost(){

    this.title = this.title.trim();
    this.feedback = this.feedback.trim();

      const post: Post={
        title: this.title,
        feedback: this.feedback,
        vote: this.vote
      }

    this.onAdd.emit(post);
    this.title=this.feedback=''
    this.vote=0;
    }
}
