import { Component, OnInit,OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Input() Sentence: any = [];
  @Input() word: any = [];
  public result: any;
  public Word :any

  constructor() { }

  ngOnInit() {
    this.result = this.Sentence;
  
  }

  ngOnChanges(){
    this.result = this.Sentence;  
  }
}



