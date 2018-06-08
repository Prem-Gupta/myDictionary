import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
   @Input() Words :any;
   @Input() Sentence : any=[];
   @Input() Synomis : any= [];
   @Input() Antonims :any = [];

   public word: string;
   public sentences : any=[];
   public syno:any = [];
   public anto : any = [];

   constructor() {}
   
   ngOnInit() {
    this.word = this.Words;
    this.sentences = this.Sentence;
    this.syno = this.Synomis;
    this.anto = this.Antonims;

   // console.log(this.sentences);
   }
   
  
  
  
  
  }
  


