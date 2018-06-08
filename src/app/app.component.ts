import { Component,OnInit } from '@angular/core';
import { WordService } from './word.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private wordsService : WordService,
    private _route:ActivatedRoute, 
    private router:Router
  ) { }
  
    
    public WordDescription :string;
    public currentWord :any = [] ;
    public word : string;

    public currentWord1: any=[];
    public synonimsWord: any=[];
    public antonimsWord:any=[];
  
    ngOnit() {
    }

    public wordSearch() :any {

      this.wordSearch1();
      this.wordSearch2();
      this.wordSearch3();
      this.wordSearch4();

    }
    public wordSearch1() :any {
  
      var word_id = this.WordDescription;   
      this.wordsService.searchWord1(word_id).subscribe(
         data => {
          this.currentWord = data.results[0];
          this.word= this.currentWord.word;
        // console.log(this.word);
          setTimeout(()=>{
            this.router.navigate(['/search'])
        }, 1000)
         },
         error => {
          console.log(error);
         }
      )
    }


    public wordSearch2() :any {

      var word_id = this.WordDescription;
      this.wordsService.searchWord2(word_id).subscribe(
        data => {
          this.currentWord1 = data.results[0].lexicalEntries[0].sentences;
        //  console.log(this.currentWord1);
          setTimeout(()=>{
            this.router.navigate(['/search'])
        }, 1000)
        },
        error => {
          console.log(error);
         }
      )

    }


    public wordSearch3() :any {

      var word_id = this.WordDescription;
      this.wordsService.searchWord3(word_id).subscribe(
        data => {
         this.synonimsWord= data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms;
       //  console.log(this.synonimsWord);
          setTimeout(()=>{
            this.router.navigate(['/search'])
        }, 1000)
        },

        error => {
          console.log(error);
         }
      )

    }

    public wordSearch4() :any {

      var word_id = this.WordDescription;
      this.wordsService.searchWord4(word_id).subscribe(
        data => {
         this.antonimsWord= data.results[0].lexicalEntries[0].entries[0].senses[0].antonyms;
       //  console.log(this.antonimsWord);
          setTimeout(()=>{
            this.router.navigate(['/search'])
        }, 1000)
        },

        error => {
          console.log(error);
         }
      )

    }
}
