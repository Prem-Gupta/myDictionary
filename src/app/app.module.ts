import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WordService } from './word.service';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     {path:'search',component:SearchComponent}
    ]),
  ],
  // exports: [
  //   AppComponent,
  //   BrowserModule,
  //   FormsModule,
  //   ReactiveFormsModule
  // ],

  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
