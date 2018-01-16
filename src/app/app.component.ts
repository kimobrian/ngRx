import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';
import { AppState as IAppState} from './models/post.model';


// interface AppState {
//   post: Post;
//   message: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  message$: Observable<string>;
  post: Observable<Post>;
  text: string; /// form input val
  msg: string;

  constructor(private store: Store<IAppState>) {
    this.post = this.store.select('post');
    this.message$ = this.store.select(AppState => AppState.message);
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) );
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }
  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }
  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  public ngOnInit(): void {
    this.store.select('message').subscribe(data => {
      console.log('>>>>>>>>', data);
    });
  }
}
