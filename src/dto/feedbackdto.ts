export class FeedbackDTO{
  id: number;
  vote: number;
  title: string;
  feedback: string;

  getSearchString() : string{
    return this.id.toString()+this.title+this.feedback;
 }
}
