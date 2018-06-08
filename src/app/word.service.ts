import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { Observable } from 'rxjs';
// import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  public app_id = '1e166b52';
  public app_key = 'd9d6caa8dd39cadd9c001ed14e71a3a9';

  constructor(private _http: HttpClient) { }



  public searchWord1(word_id): any {

    var headers = new HttpHeaders().set('Accept', 'application/json')
      .set('app_id', this.app_id)
      .set('app_key', this.app_key);
    var word = this._http.get('/api/v1/search/en/translations=es?q=' + word_id.toLowerCase() + '&prefix=false',
      { headers: headers })
    return word;

  }  

  public searchWord2 (word_id) :any {
    var headers = new HttpHeaders().set('Accept', 'application/json')
    .set('app_id', this.app_id)
    .set('app_key', this.app_key);
    var sentences = this._http.get('/api/v1/entries/en/' + word_id.toLowerCase() + '/sentences',{headers : headers})
    return sentences;
  }


  public searchWord3 (word_id) :any {
    var headers = new HttpHeaders().set('Accept', 'application/json')
    .set('app_id', this.app_id)
    .set('app_key', this.app_key);
    var synonyms = this._http.get('/api/v1/entries/en/' + word_id.toLowerCase() + '/synonyms',{headers : headers})
    return synonyms;
  }


  public searchWord4 (word_id) :any {
    var headers = new HttpHeaders().set('Accept', 'application/json')
    .set('app_id', this.app_id)
    .set('app_key', this.app_key);
    var antonyms = this._http.get('/api/v1/entries/en/' + word_id.toLowerCase() + '/antonyms',{headers : headers})
    return antonyms;
  }

   
}
