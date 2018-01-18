import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import * as fromActions from '../actions/article.actions';
import { ArticleService } from '../../services/article.service';

@Injectable()
export class ArticleEffects {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  @Effect()
  loadAllArticles$: Observable<Action> = this.actions$
    .ofType(fromActions.SHOW_ALL)
    .switchMap(() =>
      this.articleService.getAllArticles()
      .map(data => new fromActions.ShowAllSuccessAction(data))
    );

  @Effect()
  createArticle$: Observable<Action> = this.actions$
    .ofType<fromActions.CreateAction>(fromActions.CREATE)
    .map(action => action.payload)
    .mergeMap(article =>
      this.articleService.createArticle(article)
      .map(res => new fromActions.CreateSuccessAction(res))
      .catch(error => of(new fromActions.CreateFailureAction(error)))
    );

  @Effect()
  searchArticleById$: Observable<Action> = this.actions$
    .ofType<fromActions.GetByIdAction>(fromActions.GET_BY_ID)
    .debounceTime(500)
    .map(action => action.payload)
    .switchMap(id =>
      this.articleService.getArticleById(id)
      .map(res => new fromActions.GetByIdSuccessAction(res))
    );
}
