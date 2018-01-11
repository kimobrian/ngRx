import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { simpleReducer } from './simple.reducer';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
